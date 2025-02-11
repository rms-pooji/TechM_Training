public class TrailingZeroes {

    public static int countTrailingZeroes(int num) {
        int count = 0;
        while (num >= 5) {
            num /= 5;
            count += num;
        }
        return count;
    }

    public static void main(String[] args) {
        int number = 100; 
        System.out.println("Trailing zeroes in " + number + "! : " + countTrailingZeroes(number));
    }
}
