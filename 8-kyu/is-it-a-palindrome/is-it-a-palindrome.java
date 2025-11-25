public class Palindrome {
  public static Boolean isPalindrome(String x) {
    StringBuilder str = new StringBuilder(x);
    String reverse = str.reverse().toString();
    return x.equalsIgnoreCase(reverse);
  }
}