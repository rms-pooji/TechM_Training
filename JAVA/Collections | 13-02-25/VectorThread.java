package collections;
import java.util.Vector;

public class VectorThread extends Thread {
    private Vector<Integer> list;

    public VectorThread(Vector<Integer> list) {
        this.list = list;
    }

    @Override
    public void run() {
        synchronized (list) {
            list.add(100);
            list.add(200);
            list.add(300);
            System.out.println("Vector after adding elements: " + list);
            list.remove(1);
            System.out.println("Vector after removing an element: " + list);
        }
    }
}
