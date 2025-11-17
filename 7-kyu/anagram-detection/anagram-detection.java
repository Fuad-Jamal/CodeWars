public class Kata {
  public static boolean isAnagram(String a, String b) {
    if(a.length()==0 && b.length()==0) return true;
    char[] x = a.toLowerCase().toCharArray();
    char[] y = b.toLowerCase().toCharArray();
    
    java.util.Arrays.sort(x);
    java.util.Arrays.sort(y);
    
    return java.util.Arrays.equals(x,y);
  }
}