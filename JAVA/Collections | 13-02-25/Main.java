package collections;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Stack;
import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        // Initialize collections
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();
        Vector<Integer> vector = new Vector<>();
        Stack<Integer> stack = new Stack<>();

        // Create and start threads
        ArrayListThread arrayListThread = new ArrayListThread(arrayList);
        LinkedListThread linkedListThread = new LinkedListThread(linkedList);
        VectorThread vectorThread = new VectorThread(vector);
        StackThread stackThread = new StackThread(stack);

        // Start all threads
        arrayListThread.start();
        linkedListThread.start();
        vectorThread.start();
        stackThread.start();

        // Wait for all threads to finish (joining the threads)
        try {
            arrayListThread.join();
            linkedListThread.join();
            vectorThread.join();
            stackThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
