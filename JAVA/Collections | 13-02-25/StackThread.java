import java.util.Stack;

public class StackThread extends Thread {
    private Stack<Integer> stack;

    public StackThread(Stack<Integer> stack) {
        this.stack = stack;
    }

    @Override
    public void run() {
        synchronized (stack) {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            System.out.println("Stack after pushing elements: " + stack);
            stack.pop();
            System.out.println("Stack after popping an element: " + stack);
        }
    }
}
