import utility.Utility;

public class Main {

    public static void main(String[] args) {
        int number = 12345;
        int length = Utility.getLength(number); 
        System.out.println("Length of " + number + " is: " + length);
    }
}
