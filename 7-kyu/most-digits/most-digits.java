public class MostDigits {
  public static int findLongest(int[] numbers) {
    for(int i=0; i<numbers.length; i++){
      for(int j=0; j<numbers.length; j++){
        if(numbers[i]==numbers[j]){ return numbers[i];}
      }
    }
  }
}