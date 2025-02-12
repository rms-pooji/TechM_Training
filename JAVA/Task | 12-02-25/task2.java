package multithreading;


    class ThreadRunnableTwo implements Runnable {
        @Override
        public void run() {
            System.out.println("From ThreadRunnableTwo!");
            System.out.println("From ThreadRunnableTwo!");
            System.out.println("From ThreadRunnableTwo!");
        }
    }

    public class Main {
        public static void main(String[] args) {
            // Create and start the first thread
            new Thread(new ThreadRunnableTwo()).start();

            // Create and start the second thread
            new Thread(new ThreadRunnableTwo()).start();
        }
    }
