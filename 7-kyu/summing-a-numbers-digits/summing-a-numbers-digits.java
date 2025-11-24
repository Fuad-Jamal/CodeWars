public class Kata{
  public static int sumDigits(int number){
    int result = 0;
    int x = Math.abs(number);
    String[] nums = String.valueOf(x).split("");
    for(String y: nums){
  int add = Integer.parseInt(y);
      result += add;
    }
  return result;
  }
}