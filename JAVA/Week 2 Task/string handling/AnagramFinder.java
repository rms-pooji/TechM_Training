import java.util.*;

public class AnagramFinder {

    public static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (s == null || p == null || s.length() < p.length()) {
            return result;
        }

        Map<Character, Integer> pMap = new HashMap<>();
        for (char c : p.toCharArray()) {
            pMap.put(c, pMap.getOrDefault(c, 0) + 1);
        }

        Map<Character, Integer> windowMap = new HashMap<>();
        int pLength = p.length();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            windowMap.put(c, windowMap.getOrDefault(c, 0) + 1);

            if (i >= pLength) {
                char leftChar = s.charAt(i - pLength);
                windowMap.put(leftChar, windowMap.get(leftChar) - 1);
                if (windowMap.get(leftChar) == 0) {
                    windowMap.remove(leftChar);
                }
            }

            if (windowMap.equals(pMap)) {
                result.add(i - pLength + 1); 
            }
        }
        return result;
    }
}
