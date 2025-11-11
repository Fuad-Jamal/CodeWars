import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
​
public class Grab {
  
  public static List<String> grabscrab(String s, List<String> words){
    var result = new ArrayList<String>();
    var x = s.toCharArray();
    Arrays.sort(x);
    var sort = new String(x);
    for(var word : words){
      var wordChar = word.toCharArray();
      Arrays.sort(wordChar);
      var sorted = new String(wordChar);
      if(sorted.equals(sort)) result.add(word);
    }
    return result;
  }
}