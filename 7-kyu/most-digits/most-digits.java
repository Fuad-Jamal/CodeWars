public class MostDigits {
  public static int findLongest(int[] numbers) {
    int result =0;
    for(int i=0; i<numbers.length; i++){
      for(int j=0; j<numbers.length; j++){
        if(Math.max(numbers[i])==Math.max(numbers[j])) {
          result +=numbers[i];
          }
      }
    }
      return result;
  }
​
}