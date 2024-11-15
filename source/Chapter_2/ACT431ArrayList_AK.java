import java.util.*;

public class GradeOrganizer {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Define grade boundaries
        Map<String, List<Integer>> gradeMap = new LinkedHashMap<>();
        gradeMap.put("A (90-100)", new ArrayList<>());
        gradeMap.put("B (80-89)", new ArrayList<>());
        gradeMap.put("C (70-79)", new ArrayList<>());
        gradeMap.put("D (60-69)", new ArrayList<>());
        gradeMap.put("F (<60)", new ArrayList<>());

        System.out.println("Enter the number of grades you want to record: ");
        int numberOfGrades = scanner.nextInt();

        System.out.println("Enter " + numberOfGrades + " grades (integers): ");
        for (int i = 0; i < numberOfGrades; i++) {
            int grade = scanner.nextInt();

            // Categorize grade into the appropriate range
            if (grade >= 90) {
                gradeMap.get("A (90-100)").add(grade);
            } else if (grade >= 80) {
                gradeMap.get("B (80-89)").add(grade);
            } else if (grade >= 70) {
                gradeMap.get("C (70-79)").add(grade);
            } else if (grade >= 60) {
                gradeMap.get("D (60-69)").add(grade);
            } else {
                gradeMap.get("F (<60)").add(grade);
            }
        }

        // Display the results
        System.out.println("\nGrade Distribution:");
        for (Map.Entry<String, List<Integer>> entry : gradeMap.entrySet()) {
            String gradeRange = entry.getKey();
            List<Integer> grades = entry.getValue();
            System.out.println(gradeRange + ": " + grades.size() + " grades");
            System.out.println("Grades: " + grades);
        }

        scanner.close();
    }
}
