package org.example.assignment.finalexp;

public class FinalBankAccountWithInterest extends FinalBankAccount {
    private final double interestRate;

    public FinalBankAccountWithInterest(String accountNumber, double initialBalance, double interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    public final double calculateInterest() {
        return getBalance() * (interestRate / 100);
    }

    public double getInterestRate() {
        return interestRate;
    }
}
