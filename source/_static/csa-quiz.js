/* ==========================================================================
   CSA Quiz — interactive questions for the CSA JAVA Course site
   Author: Jonathan V
   --------------------------------------------------------------------------
   HOW IT WORKS
   1. In any .md page, write a question inside a block like this:

        <script type="text/x-csa-question">
        id: 2.2-q01
        type: mcq
        prompt: What does this code print?
        code:
            int x = 7;
            System.out.println(x >= 7);
        choice: true
        choice: false
        answer: A
        explain: `>=` is true when the values are equal.
        </script>

   2. This script finds every block, turns it into an interactive question,
      and sends each student attempt to your Google Sheet (Apps Script).

   QUESTION TYPES:  mcq  |  output  |  truthtable
   See QUIZ_AUTHORING.md for every option.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     SETTINGS — the only part you normally edit
     ------------------------------------------------------------------------ */
  var CONFIG = {
    // Paste your Apps Script Web App URL (ends in /exec). Leave "" for practice mode.
    endpoint: "",
    // Must match SITE_KEY in Code.gs. Stops random junk, not a determined student.
    siteKey: "csa-2026",
    // Class periods students can pick from.
    periods: ["1", "2", "3", "4", "5", "6", "7", "8"],
    // Default tries before the answer is revealed (a question can override with attempts:).
    defaultAttempts: 3,
    course: "AP CSA",
    // Seconds to wait for the Sheet when a student signs in.
    lookupTimeout: 10
  };
  // Lets a page (or the demo) override settings before this file loads.
  if (window.CSA_QUIZ_CONFIG) {
    for (var k in window.CSA_QUIZ_CONFIG) CONFIG[k] = window.CSA_QUIZ_CONFIG[k];
  }

  var STORE = "csaq:";
  var LETTERS = "ABCDEFGHIJ";

  /* ------------------------------------------------------------------------
     Small helpers
     ------------------------------------------------------------------------ */
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(STORE + key) || "null");
      localStorage.setItem(STORE + key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // Tiny markdown: `code`, **bold**, *italic*, blank line = new paragraph.
  function md(s) {
    return String(s || "").split(/\n\s*\n/).map(function (para) {
      var parts = esc(para).split("`");
      var html = parts.map(function (p, i) {
        if (i % 2) return "<code>" + p + "</code>";
        return p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
      }).join("");
      return "<p>" + html.replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  /* ------------------------------------------------------------------------
     Parse the plain-text question format
     key: value            single line
     key:                  block (following indented lines, dedented)
     repeated keys (choice, accept, column) become lists
     ------------------------------------------------------------------------ */
  var LIST_KEYS = { choice: 1, accept: 1, column: 1 };

  function parseQuestion(text) {
    var lines = text.replace(/\r/g, "").split("\n");
    var q = { choice: [], accept: [], column: [] };
    var curKey = null, buf = [];

    function flush() {
      if (!curKey) return;
      // drop trailing blank lines, then dedent
      while (buf.length && !buf[buf.length - 1].trim()) buf.pop();
      var indent = Infinity;
      buf.forEach(function (l) { if (l.trim()) indent = Math.min(indent, l.match(/^\s*/)[0].length); });
      if (indent === Infinity) indent = 0;
      var val = buf.map(function (l) { return l.slice(indent); }).join("\n");
      if (LIST_KEYS[curKey]) q[curKey].push(val); else q[curKey] = val;
      curKey = null; buf = [];
    }

    lines.forEach(function (line) {
      var m = line.match(/^([a-zA-Z]+):(?:\s(.*)|\s*)$/);
      if (m && !/^\s/.test(line)) {
        flush();
        curKey = m[1].toLowerCase();
        if (m[2] !== undefined && m[2].trim() !== "") buf.push(m[2]);
      } else if (curKey) {
        buf.push(line.replace(/\t/g, "    "));
      }
    });
    flush();
    q.type = (q.type || "mcq").trim().toLowerCase();
    q.attempts = q.attempts != null ? parseInt(q.attempts, 10) : CONFIG.defaultAttempts;
    if (isNaN(q.attempts)) q.attempts = CONFIG.defaultAttempts;
    q.points = q.points != null ? parseFloat(q.points) || 1 : 1;
    return q;
  }

  /* ------------------------------------------------------------------------
     Java boolean expression evaluator (for truth tables)
     Supports: identifiers, true, false, !, &&, ||, ==, !=, parentheses
     Precedence (Java): !  >  == !=  >  &&  >  ||
     ------------------------------------------------------------------------ */
  function evalBool(expr, env) {
    var toks = expr.match(/\s*(&&|\|\||==|!=|!|\(|\)|[A-Za-z_]\w*)\s*/g);
    if (!toks || toks.join("").replace(/\s/g, "") !== expr.replace(/\s/g, "")) {
      throw new Error("Can't read expression: " + expr);
    }
    toks = toks.map(function (t) { return t.trim(); });
    var i = 0;
    function peek() { return toks[i]; }
    function next() { return toks[i++]; }
    function orE() { var v = andE(); while (peek() === "||") { next(); var r = andE(); v = v || r; } return v; }
    function andE() { var v = eqE(); while (peek() === "&&") { next(); var r = eqE(); v = v && r; } return v; }
    function eqE() {
      var v = unE();
      while (peek() === "==" || peek() === "!=") { var op = next(); var r = unE(); v = op === "==" ? v === r : v !== r; }
      return v;
    }
    function unE() { if (peek() === "!") { next(); return !unE(); } return prim(); }
    function prim() {
      var t = next();
      if (t === "(") { var v = orE(); if (next() !== ")") throw new Error("Missing ) in " + expr); return v; }
      if (t === "true") return true;
      if (t === "false") return false;
      if (t in env) return env[t];
      throw new Error("Unknown name '" + t + "' in " + expr);
    }
    var out = orE();
    if (i !== toks.length) throw new Error("Extra text in " + expr);
    return out;
  }

  /* ------------------------------------------------------------------------
     Student identity
     ------------------------------------------------------------------------ */
  function getStudent() { return recording() ? store("student") : null; }
  function recording() { return !!CONFIG.endpoint; }

  /* ------------------------------------------------------------------------
     Ask the Sheet about a student: is the ID on the roster, and which
     questions on this page are already finished (on any computer)?
     Uses JSONP because Apps Script can't answer a normal cross-site fetch.
     ------------------------------------------------------------------------ */
  function lookup(studentId) {
    if (typeof CONFIG.lookup === "function") return Promise.resolve(CONFIG.lookup(studentId, location.pathname));
    return new Promise(function (resolve, reject) {
      var cb = "csaqStatus_" + uid().replace(/\W/g, "");
      var s = document.createElement("script");
      var timer = setTimeout(function () { done(); reject(new Error("timeout")); }, CONFIG.lookupTimeout * 1000);
      function done() { clearTimeout(timer); try { delete window[cb]; } catch (e) { window[cb] = undefined; } if (s.parentNode) s.parentNode.removeChild(s); }
      window[cb] = function (data) { done(); resolve(data); };
      s.onerror = function () { done(); reject(new Error("network")); };
      s.src = CONFIG.endpoint + (CONFIG.endpoint.indexOf("?") < 0 ? "?" : "&") +
        "action=status&key=" + encodeURIComponent(CONFIG.siteKey) +
        "&studentId=" + encodeURIComponent(studentId) +
        "&page=" + encodeURIComponent(location.pathname) +
        "&callback=" + cb;
      document.head.appendChild(s);
    });
  }

  // Server record wins: it is what the gradebook scores.
  function applyServer(data) {
    if (!data || !data.questions) return;
    widgets.forEach(function (w) {
      var sv = data.questions[w.q.id];
      if (!sv) return;
      var s = w.state;
      if (sv.done) {
        w.state = { attempts: sv.attempts, done: true, correct: !!sv.correct, last: sv.response || "", fromSheet: true };
      } else if (!s.done && sv.attempts > s.attempts) {
        s.attempts = sv.attempts;
      } else {
        return;
      }
      store(stateKey(w.q), w.state);
      resetWidget(w);
      restore(w);
    });
    refreshLocks();
  }

  function syncFromSheet() {
    var st = getStudent();
    if (!st) return;
    lookup(st.studentId).then(applyServer, function () { /* offline: local progress still applies */ });
  }

  /* ------------------------------------------------------------------------
     Sending results — queued so nothing is lost on bad Wi-Fi
     ------------------------------------------------------------------------ */
  var flushing = false;
  function enqueue(payload) {
    var qd = store("queue") || [];
    qd.push(payload);
    store("queue", qd);
    flushQueue();
  }
  function flushQueue() {
    if (!recording() || flushing) return;
    var qd = store("queue") || [];
    if (!qd.length) { setSync("ok"); return; }
    flushing = true;
    setSync("sending");
    var item = qd[0];
    fetch(CONFIG.endpoint, {
      method: "POST",
      mode: "no-cors",                         // Apps Script accepts this without a CORS preflight
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(item),
      keepalive: true
    }).then(function () {
      var cur = store("queue") || [];
      store("queue", cur.filter(function (x) { return x.sid !== item.sid; }));
      flushing = false;
      flushQueue();
    }).catch(function () {
      flushing = false;
      setSync("offline");
    });
  }
  setInterval(flushQueue, 30000);
  window.addEventListener("online", flushQueue);

  var syncEl = null;
  function setSync(state) {
    if (!syncEl) return;
    var n = (store("queue") || []).length;
    syncEl.className = "csaq-sync csaq-sync-" + state;
    syncEl.textContent =
      state === "ok" ? "All answers saved" :
      state === "sending" ? "Saving…" :
      n + " answer" + (n === 1 ? "" : "s") + " waiting to send — will retry";
  }

  /* ------------------------------------------------------------------------
     Sign-in / status bar at the top of the page
     ------------------------------------------------------------------------ */
  var barEl = null;
  function renderBar() {
    if (!barEl) return;
    var s = getStudent();
    barEl.innerHTML = "";
    if (!recording()) {
      barEl.className = "csaq-bar csaq-bar-practice";
      barEl.appendChild(el("span", "csaq-bar-label", "<strong>Practice mode</strong> — answers on this page are not being recorded."));
      return;
    }
    if (s) {
      barEl.className = "csaq-bar";
      barEl.appendChild(el("span", "csaq-bar-label",
        "Recording as <strong>" + esc(s.name) + "</strong> · ID " + esc(s.studentId) +
        (s.period ? " · Period " + esc(s.period) : "")));
      syncEl = el("span", "csaq-sync");
      barEl.appendChild(syncEl);
      // Two-step sign out (no pop-up dialogs)
      var chg = el("button", "csaq-link", "Not you?");
      chg.type = "button";
      var armed = null;
      chg.onclick = function () {
        if (!armed) {
          chg.textContent = "Click again to sign out";
          chg.classList.add("csaq-link-armed");
          armed = setTimeout(function () { armed = null; chg.textContent = "Not you?"; chg.classList.remove("csaq-link-armed"); }, 4000);
          return;
        }
        clearTimeout(armed);
        store("student", null);
        renderBar(); loadStates();
      };
      barEl.appendChild(chg);
      setSync((store("queue") || []).length ? "offline" : "ok");
      flushQueue();
      return;
    }
    barEl.className = "csaq-bar csaq-bar-signin";
    var form = el("form", "csaq-signin");
    form.setAttribute("novalidate", "");
    form.innerHTML =
      '<span class="csaq-bar-label"><strong>Sign in to record your answers</strong></span>' +
      '<label>Student ID <input name="studentId" inputmode="numeric" autocomplete="off"></label>' +
      '<span class="csaq-extra" hidden>' +
        '<label>Name <input name="name" autocomplete="name" placeholder="First Last"></label>' +
        '<label>Period <select name="period"><option value="">–</option>' +
        CONFIG.periods.map(function (p) { return "<option>" + esc(p) + "</option>"; }).join("") +
        "</select></label>" +
      "</span>" +
      '<button type="submit" class="csaq-btn">Start</button>' +
      '<span class="csaq-signin-msg" role="status"></span>';
    var extra = form.querySelector(".csaq-extra");
    var msg = form.querySelector(".csaq-signin-msg");
    var btn = form.querySelector("button");
    function say(text, bad) { msg.textContent = text; msg.classList.toggle("csaq-signin-bad", !!bad); }
    function signIn(student, data) {
      store("student", student);
      renderBar(); loadStates();
      if (data) applyServer(data); else syncFromSheet();
    }
    form.onsubmit = function (ev) {
      ev.preventDefault();
      var f = new FormData(form);
      var sidv = String(f.get("studentId") || "").trim();
      if (!sidv) { say("Enter your Student ID.", true); return; }

      // Fallback path: no roster, or the Sheet couldn't be reached
      if (!extra.hidden) {
        var name = String(f.get("name") || "").trim(), per = String(f.get("period") || "");
        if (!name || !per) { say("Enter your name and period.", true); return; }
        signIn({ studentId: sidv, name: name, period: per, verified: false });
        return;
      }

      btn.disabled = true;
      say("Checking your ID…");
      lookup(sidv).then(function (data) {
        btn.disabled = false;
        if (!data || data.ok === false) throw new Error((data && data.error) || "bad reply");
        if (data.roster && !data.found) {
          say("Student ID " + sidv + " isn't on the class roster. Check the number and try again.", true);
          return;
        }
        if (data.roster && data.found) {
          signIn({ studentId: sidv, name: data.name, period: String(data.period || ""), verified: true }, data);
          return;
        }
        extra.hidden = false;
        say("No class roster yet. Enter your name and period, then Start.");
      }).catch(function () {
        btn.disabled = false;
        extra.hidden = false;
        say("Couldn't reach the class sheet. Enter your name and period to continue; your answers will still be saved.", true);
      });
    };
    barEl.appendChild(form);
  }

  /* ------------------------------------------------------------------------
     Question widgets
     ------------------------------------------------------------------------ */
  var widgets = [];

  function sectionOf(node) {
    var s = node.parentElement;
    while (s) {
      if (s.tagName === "SECTION" && s.firstElementChild && s.firstElementChild.tagName === "H2") {
        return { el: s, title: s.firstElementChild.textContent.replace(/[¶#]\s*$/, "").trim() };
      }
      s = s.parentElement;
    }
    var h1 = document.querySelector("h1");
    return { el: document.body, title: h1 ? h1.textContent.replace(/[¶#]\s*$/, "").trim() : document.title };
  }

  // Saved progress belongs to one student, so a shared laptop never shows someone else's work.
  function stateKey(q) {
    var st = getStudent();
    return "q:" + (st ? st.studentId : "practice") + ":" + location.pathname + ":" + q.id;
  }

  function build(scriptEl, index) {
    var q;
    try { q = parseQuestion(scriptEl.textContent); } catch (e) { q = { error: e.message }; }
    var box = el("div", "csaq");
    scriptEl.parentNode.insertBefore(box, scriptEl.nextSibling);

    if (!q.id) q.id = "q" + (index + 1);
    var maker = { mcq: buildMcq, output: buildOutput, truthtable: buildTruth }[q.type];
    if (!maker || q.error) {
      box.className += " csaq-error";
      box.textContent = "Question " + q.id + ": " + (q.error || "unknown type '" + q.type + "'. Use mcq, output, or truthtable.");
      return;
    }

    var w = { q: q, box: box, section: sectionOf(box), state: { attempts: 0, done: false } };

    var head = el("div", "csaq-head");
    head.appendChild(el("span", "csaq-tag", esc(q.title || "Check for Understanding")));
    head.appendChild(el("span", "csaq-id", esc(q.id)));
    w.status = el("span", "csaq-status");
    head.appendChild(w.status);
    box.appendChild(head);

    if (q.prompt) box.appendChild(el("div", "csaq-prompt", md(q.prompt)));
    if (q.code) box.appendChild(el("pre", "csaq-code", "<code>" + esc(q.code) + "</code>"));

    w.body = el("div", "csaq-body");
    box.appendChild(w.body);

    var actions = el("div", "csaq-actions");
    w.checkBtn = el("button", "csaq-btn", "Check");
    w.checkBtn.type = "button";
    actions.appendChild(w.checkBtn);
    w.tries = el("span", "csaq-tries");
    actions.appendChild(w.tries);
    box.appendChild(actions);

    w.feedback = el("div", "csaq-feedback");
    box.appendChild(w.feedback);

    try { maker(w); } catch (e) {
      box.className = "csaq csaq-error";
      box.textContent = "Question " + q.id + ": " + e.message;
      return;
    }
    w.checkBtn.onclick = function () { submit(w); };
    widgets.push(w);
  }

  // ---- Multiple choice -----------------------------------------------------
  function buildMcq(w) {
    var q = w.q;
    if (q.choice.length < 2) throw new Error("mcq needs at least two choice: lines");
    var correct = (q.answer || "").toUpperCase().replace(/[^A-J]/g, "").split("");
    if (!correct.length) throw new Error("mcq needs answer: (A, B, C…)");
    var multi = correct.length > 1;
    var name = "csaq-" + q.id.replace(/\W/g, "_");
    w.inputs = [];
    var list = el("div", "csaq-choices");
    q.choice.forEach(function (c, i) {
      var lab = el("label", "csaq-choice");
      var inp = document.createElement("input");
      inp.type = multi ? "checkbox" : "radio";
      inp.name = name; inp.value = LETTERS[i];
      lab.appendChild(inp);
      lab.appendChild(el("span", "csaq-letter", LETTERS[i]));
      var txt = el("span", "csaq-choice-text", /\n/.test(c) ? "<pre><code>" + esc(c) + "</code></pre>" : md(c).replace(/^<p>|<\/p>$/g, ""));
      lab.appendChild(txt);
      list.appendChild(lab);
      w.inputs.push(inp);
    });
    if (multi) w.body.appendChild(el("div", "csaq-hint", "Select <strong>all</strong> that apply."));
    w.body.appendChild(list);
    w.read = function () {
      return w.inputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; }).join("");
    };
    w.grade = function (resp) { return resp === correct.slice().sort().join(""); };
    w.write = function (resp) { w.inputs.forEach(function (i) { i.checked = resp.indexOf(i.value) >= 0; }); };
    w.reveal = function () {
      w.inputs.forEach(function (i) {
        if (correct.indexOf(i.value) >= 0) i.parentNode.classList.add("csaq-right");
      });
    };
    w.mark = function (resp, ok) {
      w.inputs.forEach(function (i) { i.parentNode.classList.remove("csaq-wrong", "csaq-right"); });
      if (ok) w.reveal();
      else w.inputs.forEach(function (i) { if (i.checked) i.parentNode.classList.add("csaq-wrong"); });
    };
    w.lock = function (on) { w.inputs.forEach(function (i) { i.disabled = on; }); };
    w.answerText = correct.join(", ");
  }

  // ---- Predict the output --------------------------------------------------
  function normOut(s, ci) {
    var t = String(s).replace(/\r/g, "").split("\n").map(function (l) { return l.replace(/\s+$/, ""); }).join("\n").trim();
    return ci ? t.toLowerCase() : t;
  }
  function buildOutput(w) {
    var q = w.q;
    if (!q.accept.length) throw new Error("output needs at least one accept: line");
    var ci = /insensitive|ignore/i.test(q["case"] || "");
    var lines = Math.max.apply(null, q.accept.map(function (a) { return a.split("\n").length; }));
    w.body.appendChild(el("div", "csaq-hint", "Type exactly what prints" + (lines > 1 ? " (one line per println)" : "") + "."));
    var ta = document.createElement(lines > 1 ? "textarea" : "input");
    ta.className = "csaq-text";
    ta.setAttribute("spellcheck", "false");
    ta.setAttribute("autocomplete", "off");
    if (lines > 1) ta.rows = lines + 1;
    ta.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" && ta.tagName === "INPUT") { ev.preventDefault(); w.checkBtn.click(); }
    });
    w.body.appendChild(ta);
    w.read = function () { return ta.value; };
    w.grade = function (resp) {
      var r = normOut(resp, ci);
      return q.accept.some(function (a) { return normOut(a, ci) === r; });
    };
    w.write = function (resp) { ta.value = resp; };
    w.mark = function (resp, ok) { ta.classList.toggle("csaq-wrong", !ok); ta.classList.toggle("csaq-right", ok); };
    w.reveal = function () {};
    w.lock = function (on) { ta.disabled = on; };
    w.answerText = q.accept[0];
    w.isBlank = function (r) { return !String(r).trim(); };
  }

  // ---- Truth table ---------------------------------------------------------
  function buildTruth(w) {
    var q = w.q;
    var vars = (q.vars || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    if (!vars.length) throw new Error("truthtable needs vars: a, b, c");
    if (!q.column.length) throw new Error("truthtable needs at least one column: expression");
    var rows = [], n = vars.length;
    for (var r = 0; r < (1 << n); r++) {
      var env = {};
      vars.forEach(function (v, j) { env[v] = !((r >> (n - 1 - j)) & 1); }); // T first, like the textbook
      rows.push(env);
    }
    var expected = q.column.map(function (expr) {
      return rows.map(function (env) { return evalBool(expr, env) ? "T" : "F"; }).join("");
    });

    var table = el("table", "csaq-tt");
    var thead = "<thead><tr>" + vars.map(function (v) { return "<th>" + esc(v) + "</th>"; }).join("") +
      q.column.map(function (c) { return '<th class="csaq-tt-out"><code>' + esc(c) + "</code></th>"; }).join("") + "</tr></thead>";
    table.innerHTML = thead;
    var tb = document.createElement("tbody");
    w.cells = q.column.map(function () { return []; });
    rows.forEach(function (env, ri) {
      var tr = document.createElement("tr");
      vars.forEach(function (v) { tr.appendChild(el("td", "csaq-tt-in", env[v] ? "T" : "F")); });
      q.column.forEach(function (c, ci) {
        var td = document.createElement("td");
        var b = el("button", "csaq-cell", "&nbsp;");
        b.type = "button";
        b.setAttribute("aria-label", "Row " + (ri + 1) + ", " + c);
        b.dataset.v = "";
        b.onclick = function () {
          b.dataset.v = b.dataset.v === "" ? "T" : b.dataset.v === "T" ? "F" : "";
          b.innerHTML = b.dataset.v || "&nbsp;";
          b.classList.remove("csaq-wrong", "csaq-right");
        };
        td.appendChild(b);
        tr.appendChild(td);
        w.cells[ci].push(b);
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    w.body.appendChild(el("div", "csaq-hint", "Click a cell to cycle blank → T → F."));
    var wrap = el("div", "csaq-tt-wrap");
    wrap.appendChild(table);
    w.body.appendChild(wrap);

    w.read = function () {
      return w.cells.map(function (col) { return col.map(function (b) { return b.dataset.v || "_"; }).join(""); }).join("|");
    };
    w.isBlank = function (r) { return r.indexOf("_") >= 0; };
    w.blankMsg = "Fill in every cell before checking.";
    w.grade = function (resp) { return resp === expected.join("|"); };
    w.write = function (resp) {
      var cols = String(resp || "").split("|");
      w.cells.forEach(function (colCells, ci) {
        var col = cols[ci] || "";
        colCells.forEach(function (b, ri) {
          var v = col[ri] === "T" || col[ri] === "F" ? col[ri] : "";
          b.dataset.v = v; b.innerHTML = v || "&nbsp;";
        });
      });
    };
    w.mark = function () {
      w.cells.forEach(function (col, ci) {
        col.forEach(function (b, ri) {
          var ok = b.dataset.v === expected[ci][ri];
          b.classList.toggle("csaq-wrong", !ok);
          b.classList.toggle("csaq-right", ok);
        });
      });
    };
    w.reveal = function () { w.write(expected.join("|")); w.mark(); };
    w.lock = function (on) { w.cells.forEach(function (col) { col.forEach(function (b) { b.disabled = on; }); }); };
    w.answerText = null; // revealed in the table itself
    w.wrongCount = function () {
      var n = 0;
      w.cells.forEach(function (col, ci) { col.forEach(function (b, ri) { if (b.dataset.v !== expected[ci][ri]) n++; }); });
      return n;
    };
  }

  /* ------------------------------------------------------------------------
     Checking, locking, saving
     ------------------------------------------------------------------------ */
  function needsSignIn() { return recording() && !getStudent(); }

  function updateTries(w) {
    var q = w.q, s = w.state;
    if (s.done) { w.tries.textContent = ""; return; }
    w.tries.textContent = q.attempts > 0
      ? (q.attempts - s.attempts) + " of " + q.attempts + " tries left"
      : (s.attempts ? s.attempts + " tries so far" : "");
  }

  function setStatus(w) {
    var s = w.state;
    w.box.classList.remove("csaq-done-right", "csaq-done-wrong");
    if (!s.done) { w.status.textContent = ""; return; }
    w.box.classList.add(s.correct ? "csaq-done-right" : "csaq-done-wrong");
    w.status.textContent = s.correct
      ? (s.attempts === 1 ? "✓ Correct on first try" : "✓ Correct (" + s.attempts + " tries)")
      : "✗ Answer revealed";
  }

  function finish(w) {
    var q = w.q, s = w.state;
    w.lock(true);
    w.checkBtn.hidden = true;
    var html = "";
    if (!s.correct) {
      w.reveal();
      if (w.answerText) html += '<p class="csaq-answer">Correct answer: <code>' + esc(w.answerText).replace(/\n/g, "<br>") + "</code></p>";
    }
    if (q.explain) html += '<div class="csaq-explain">' + md(q.explain) + "</div>";
    w.feedback.className = "csaq-feedback " + (s.correct ? "csaq-fb-right" : "csaq-fb-reveal");
    w.feedback.innerHTML = (s.correct ? "<p><strong>Correct!</strong></p>" : "<p><strong>Out of tries.</strong> Study the answer below.</p>") + html;
    updateTries(w);
    setStatus(w);
  }

  function submit(w) {
    if (needsSignIn()) {
      w.feedback.className = "csaq-feedback csaq-fb-wrong";
      w.feedback.innerHTML = "<p>Sign in at the top of the page first so your answer counts.</p>";
      if (barEl) barEl.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    var q = w.q, s = w.state;
    var resp = w.read();
    var blank = w.isBlank ? w.isBlank(resp) : !resp;
    if (blank) {
      w.feedback.className = "csaq-feedback csaq-fb-wrong";
      w.feedback.innerHTML = "<p>" + (w.blankMsg || "Choose or type an answer first.") + "</p>";
      return;
    }
    var ok = w.grade(resp);
    s.attempts += 1;
    s.last = resp;
    if (s.attempts === 1) s.firstCorrect = ok;
    w.mark(resp, ok);

    var outOfTries = q.attempts > 0 && s.attempts >= q.attempts;
    if (ok || outOfTries) { s.done = true; s.correct = ok; }
    store(stateKey(q), s);

    // Log every attempt
    var st = getStudent() || {};
    var payload = {
      key: CONFIG.siteKey,
      sid: uid(),
      clientTime: new Date().toISOString(),
      course: CONFIG.course,
      studentId: st.studentId || "",
      name: st.name || "",
      period: st.period || "",
      page: location.pathname,
      section: w.section.title,
      sectionTotal: widgets.filter(function (x) { return x.section.el === w.section.el; })
        .reduce(function (a, x) { return a + x.q.points; }, 0),
      qid: q.id,
      qtype: q.type,
      points: q.points,
      response: resp,
      correct: ok,
      attempt: s.attempts,
      final: !!s.done
    };
    if (recording()) enqueue(payload);
    try { document.dispatchEvent(new CustomEvent("csa-quiz:attempt", { detail: payload })); } catch (e) {}

    if (s.done) { finish(w); }
    else {
      var extra = w.wrongCount ? " " + w.wrongCount() + " cell" + (w.wrongCount() === 1 ? " is" : "s are") + " wrong (marked in red)." : "";
      w.feedback.className = "csaq-feedback csaq-fb-wrong";
      w.feedback.innerHTML = "<p><strong>Not yet.</strong>" + extra + (q.hint ? " " + md(q.hint).replace(/^<p>|<\/p>$/g, "") : " Try again.") + "</p>";
      updateTries(w);
    }
    updateProgress();
  }

  function restore(w) {
    var s = w.state;
    if (s.last) w.write(s.last);
    if (s.done) { w.mark(s.last || "", s.correct); finish(w); }
    else { updateTries(w); setStatus(w); }
  }

  // Put a question back to blank and unlocked.
  function resetWidget(w) {
    w.write("");
    Array.prototype.forEach.call(w.box.querySelectorAll(".csaq-right, .csaq-wrong"), function (n) {
      n.classList.remove("csaq-right", "csaq-wrong");
    });
    w.feedback.className = "csaq-feedback";
    w.feedback.innerHTML = "";
    w.checkBtn.hidden = false;
    w.lock(false);
  }

  // Load the current student's saved progress into every question.
  function loadStates() {
    widgets.forEach(function (w) {
      w.state = store(stateKey(w.q)) || { attempts: 0, done: false };
      resetWidget(w);
      restore(w);
    });
    refreshLocks();
  }

  function refreshLocks() {
    widgets.forEach(function (w) {
      if (w.state.done) return;
      var off = needsSignIn();
      w.lock(off);
      w.checkBtn.disabled = off;
      w.box.classList.toggle("csaq-locked", off);
    });
    updateProgress();
  }

  function updateProgress() {
    if (!barEl || !widgets.length) return;
    var done = widgets.filter(function (w) { return w.state.done; }).length;
    var pe = barEl.querySelector(".csaq-progress");
    if (!pe) { pe = el("span", "csaq-progress"); barEl.appendChild(pe); }
    pe.textContent = done + " / " + widgets.length + " questions done";
  }

  /* ------------------------------------------------------------------------
     Start
     ------------------------------------------------------------------------ */
  function init() {
    var blocks = document.querySelectorAll('script[type="text/x-csa-question"]');
    if (!blocks.length) return;
    var host = document.querySelector("article") || document.querySelector("main") || document.body;
    barEl = el("div", "csaq-bar");
    var firstHeading = host.querySelector("h1");
    if (firstHeading && firstHeading.parentNode) firstHeading.parentNode.insertBefore(barEl, firstHeading.nextSibling);
    else host.insertBefore(barEl, host.firstChild);
    renderBar();
    Array.prototype.forEach.call(blocks, build);
    loadStates();
    syncFromSheet(); // pick up work finished on another computer
  }

  window.CSAQuiz = { parse: parseQuestion, evalBool: evalBool, config: CONFIG };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

