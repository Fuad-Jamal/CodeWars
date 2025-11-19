public class Solution {
  public static String vaporcode(String s) {
    var x = s.toUpperCase().replaceAll("\\s+","").split("");
    return String.join("  ", x);
  }
}