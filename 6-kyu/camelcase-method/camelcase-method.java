public class Solution {
​
    public static String camelCase(String str){
      String[] split = str.split(" ");
  StringBuilder result = new StringBuilder();
  
  for(String part: split){
    part = part.trim();
    if(part.length()>0){
      char first = Character.toUpperCase(part.charAt(0));
      String rest = part.substring(1);
      result.append(first).append(rest);
    }
  }
        return result.toString();
    }
​
}
​