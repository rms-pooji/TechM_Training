public class Main {
    public static void main(String[] args) {
        User user1 = new User("John", 25);
        User user2 = new User("John", 25);

        SecondUser secondUser1 = new SecondUser("John", 25);
        SecondUser secondUser2 = new SecondUser("John", 25);

        System.out.println("User1 (with toString): " + user1);
        System.out.println("User2 (with toString): " + user2);
        
        System.out.println("\nSecondUser1 (without toString): " + secondUser1);
        System.out.println("SecondUser2 (without toString): " + secondUser2);

        System.out.println("\nUser1 equals User2 (with equals): " + user1.equals(user2)); 

        System.out.println("SecondUser1 equals SecondUser2 (without equals): " + secondUser1.equals(secondUser2)); 
    }
}
