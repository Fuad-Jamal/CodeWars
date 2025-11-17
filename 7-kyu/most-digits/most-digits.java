 
public class MostDigits {
  public static int findLongest(int[] numbers) {
    long result =0;
    for(long i=0; i<numbers.length; i++){
      if(result<numbers[i]){
        result = numbers[i];
      }
    }
      return result;
  }
​
}