public class PrimitiveAndReference {
    
    public static void modifyValues(int num, int[] arr) {
        num = 10; 
        arr[0] = 100; 
    }
    
    public static void main(String[] args) {
        int number = 5;
        int[] array = {1, 2, 3, 4, 5};
        
        System.out.println("Before modifyValues method:");
        System.out.println("number: " + number);  
        System.out.println("array[0]: " + array[0]); 
        
        modifyValues(number, array);
        
        System.out.println("\nAfter modifyValues method:");
        System.out.println("number: " + number);  
        System.out.println("array[0]: " + array[0]);  
    }
}
