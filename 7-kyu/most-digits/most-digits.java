public class MostDigits {
  public static int findLongest(int[] numbers) {
    int result =0;
    for(int i=0; i<numbers.length; i++){
      if(result<numbers[i]){
        result = numbers[i];
      }else if(String.valueOf(result).length() == String.valueOf(numbers[i]).length()){
        
      }
    }
      return result;
  }
​
}