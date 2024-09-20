class Main {
		public static void main(String arg[])
		{
				char branch = 'C'; // C - CS, B - BioTech, M - Mech
				int year = 3;

				switch( year )
				{
						case 1:
								System.out.println("English, Math, Technical Writing");
								break;
						case 2:
								switch( branch ) // Nested Branch
								{
										case 'C':
												System.out.println("Data structures, Java, Computer Organization");
												break;
										case 'B':
												System.out.println("Biology, Chemistry");
												break;
										case 'M':
												System.out.println("Drafting, Integrated Manufacturing");
												break;
								}
								break;
						case 3:
								switch( branch ) // Nested Branch
								{
										case 'C':
												System.out.println("Operating System, Software Design & Development");
												break;
										case 'B':
												System.out.println("Physics, Microbiology");
												break;
										case 'M':
												System.out.println("Internal Combustion Engines, Mechanical Vibration");
												break;
								}
								break;
				}

		}
}
