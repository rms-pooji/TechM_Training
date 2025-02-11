package org.example.assignment;
import java.util.Scanner;
public class Maindivide {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter dividend: ");
        int dividend = scanner.nextInt();

        System.out.print("Enter divisor: ");
        int divisor = scanner.nextInt();

        Divide2num divideOperation = new Divide2num(dividend, divisor);
        divideOperation.zero();

        scanner.close();
    }
}
