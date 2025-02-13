package collections;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class SetSampleTestClass {

    public static void main(String[] args) {
        // Create collections
        HashSet<Integer> hashSet = new HashSet<>();
        LinkedHashSet<Integer> linkedHashSet = new LinkedHashSet<>();
        TreeSet<Integer> treeSet = new TreeSet<>();

        // Invoke methods with appropriate collections
        System.out.println("Working with HashSet:");
        setSample(hashSet);

        System.out.println("\nWorking with LinkedHashSet:");
        setSample(linkedHashSet);

        System.out.println("\nWorking with TreeSet:");
        setSample(treeSet);
    }

    // Method to work with HashSet
    public static void setSample(HashSet<Integer> hs) {
        // Adding elements
        hs.add(10);
        hs.add(20);
        hs.add(30);
        hs.add(20);  // Duplicate element, won't be added to the set
        System.out.println("HashSet after adding elements: " + hs);

        // Removing an element
        hs.remove(20);
        System.out.println("HashSet after removing element 20: " + hs);

        // Checking if an element exists
        System.out.println("Does HashSet contain 10? " + hs.contains(10));
    }

    // Method to work with LinkedHashSet
    public static void setSample(LinkedHashSet<Integer> hs) {
        // Adding elements
        hs.add(40);
        hs.add(50);
        hs.add(60);
        hs.add(40);  // Duplicate element, won't be added to the set
        System.out.println("LinkedHashSet after adding elements: " + hs);

        // Removing an element
        hs.remove(50);
        System.out.println("LinkedHashSet after removing element 50: " + hs);

        // Checking if an element exists
        System.out.println("Does LinkedHashSet contain 60? " + hs.contains(60));
    }

    // Method to work with TreeSet
    public static void setSample(TreeSet<Integer> hs) {
        // Adding elements
        hs.add(100);
        hs.add(200);
        hs.add(300);
        hs.add(200);  // Duplicate element, won't be added to the set
        System.out.println("TreeSet after adding elements: " + hs);

        // Removing an element
        hs.remove(200);
        System.out.println("TreeSet after removing element 200: " + hs);

        // Checking if an element exists
        System.out.println("Does TreeSet contain 100? " + hs.contains(100));
    }
}
