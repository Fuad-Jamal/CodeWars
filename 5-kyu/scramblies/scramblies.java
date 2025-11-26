import java.util.HashMap;
import java.util.Map;
​
public class Scramblies {
    
    public static boolean scramble(String str1, String str2) {    
      Map<Character, Integer> fam = new HashMap<>();
      
      for(int i=0; i<str1.length(); i++){
        char x = str1.charAt(i);
        fam.put(x, fam.getOrDefault(x,0)+1);
      }
      char[] chars = str2.toCharArray();
      for(char y: chars){
        int count = fam.getOrDefault(y,0);
        if(count == 0){
          return false;
      }else{
          fam.put(y,count-1);
        }   
        }
      return true;
    }
}