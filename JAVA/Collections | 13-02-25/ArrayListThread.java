package collections;
import java.util.ArrayList;

public class ArrayListThread extends Thread {
    private ArrayList<Integer> list;

    public ArrayListThread(ArrayList<Integer> list) {
        this.list = list;
    }

    @Override
    public void run() {
        synchronized (list) {
            list.add(10);
            list.add(20);
            list.add(30);
            System.out.println("ArrayList after adding elements: " + list);
            list.remove(1);
            System.out.println("ArrayList after removing an element: " + list);
        }
    }
}
