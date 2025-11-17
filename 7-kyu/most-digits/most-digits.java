public class MostDigits {
  public static int findLongest(int[] numbers) {
    int result =0;
    for(int i=0; i<numbers.length; i++){
        int now = String.valueOf(numbers[i]).length();
        int results =String.valueOf(result).length() ;
        result = numbers[i];
      if(now>results){
        result = numbers[i];
      }
      
    }
      return result;
  }
​
}