public class Main
{
	public static void main(String[] args)
	{
		int path1 = -1; // The car drives West 1 block
		int path2 = -1; // The car drives West 1 block
		int path3 = -1; // The car drives West 1 block
		int path4 = 3; // The car drives East 3 blocks
		// Added calls to Math.abs in the print statement below.
		System.out.println(Math.abs(path1) + Math.abs(path2) + Math.abs(path3) + Math.abs(path4)); 
	}
}
