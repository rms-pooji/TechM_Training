package multithreading;

public class P_Task1_Thread1 extends Thread {

    public void run(){
        System.out.println("From ThreadOne!");
        System.out.println("From ThreadOne!");
        System.out.println("From ThreadOne!");
        System.out.println(10/0);
    }
}

class Sample {
    public static void main(String[] args){
        P_Task1_Thread1 p1= new P_Task1_Thread1();
       // l1.start();
        p1.run();

        System.out.println(10/0);
    }
}

      
