package collections;
import java.util.LinkedList;

public class LinkedListThread extends Thread {
    private LinkedList<Integer> list;

    public LinkedListThread(LinkedList<Integer> list) {
        this.list = list;
    }

    @Override
    public void run() {
        synchronized (list) {
            list.add(50);
            list.add(60);
            list.add(70);
            System.out.println("LinkedList after adding elements: " + list);
            list.remove(0);
            System.out.println("LinkedList after removing an element: " + list);
        }
    }
}
