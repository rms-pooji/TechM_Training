package org.example.assignment.finalexp;

public final class FinalTransaction {
    private final String transactionId;
    private final String type; 
    private final double amount;

    public FinalTransaction(String transactionId, String type, double amount) {
        this.transactionId = transactionId;
        this.type = type;
        this.amount = amount;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public String getType() {
        return type;
    }

    public double getAmount() {
        return amount;
    }

    public void displayTransactionDetails() {
        System.out.println("Transaction ID: " + transactionId);
        System.out.println("Transaction Type: " + type);
        System.out.println("Amount: " + amount);
    }
}
