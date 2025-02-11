import java.util.*;

public class Main {
    public static void main(String[] args) {

        String text = "hello";
        String reversed = StringProcessor.reverseString(text);
        System.out.println("Reversed string: " + reversed); 

        String sentence = "hello world, hello universe";
        String sub = "hello";
        int count = StringProcessor.countOccurrences(sentence, sub);
        System.out.println("Occurrences of 'hello': " + count); 

        String str = "hello world, welcome to java";
        String capitalized = StringProcessor.splitAndCapitalize(str);
        System.out.println("Capitalized String: " + capitalized);


        String s = "cbaebabacd";
        String p = "abc";
        List<Integer> anagrams = AnagramFinder.findAnagrams(s, p);
        System.out.println("Anagram start indices: " + anagrams); 
    }
}
