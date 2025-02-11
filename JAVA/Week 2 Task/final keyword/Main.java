package org.example.assignment.finalexp;

public class Main {
    public static void main(String[] args) {
        FinalBankAccount account = new FinalBankAccount("12345", 1000.0);
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Initial Balance: " + account.getBalance());

        account.deposit(500.0);
        System.out.println("Balance after deposit: " + account.getBalance());

        account.withdraw(200.0);
        System.out.println("Balance after withdrawal: " + account.getBalance());

        FinalBankAccountWithInterest interestAccount = new FinalBankAccountWithInterest("67890", 1500.0, 5.0);
        System.out.println("\nAccount Number: " + interestAccount.getAccountNumber());
        System.out.println("Balance: " + interestAccount.getBalance());
        System.out.println("Interest Rate: " + interestAccount.getInterestRate());
        System.out.println("Interest: " + interestAccount.calculateInterest());

        FinalTransaction transaction = new FinalTransaction("TX123", "Deposit", 500.0);
        System.out.println("\nTransaction Details:");
        transaction.displayTransactionDetails();
    }
}
