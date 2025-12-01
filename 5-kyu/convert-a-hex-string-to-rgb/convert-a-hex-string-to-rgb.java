import java.util.HashMap;
​
public class HexToRGB {
  
  public static HashMap<String, Integer> hexStringToRGB(String hex) {
    
    String hash = hex.substring(1);
    String r="";
    String g="";
    String b="";
    
    for(int i=0; i<hash.length(); i+=2){
      String section = hash.substring(i,i+2);
      if(i==0){
        r = section;
      }else if(i==2){
        g = section;
      }else if(i==4){
        b = section;
      }
    }
    int red = Integer.parseInt(r,16);
    int green = Integer.parseInt(g,16);
    int blue = Integer.parseInt(b,16);
    
  HashMap<String, Integer> colors = new HashMap<>();
    colors.put("r", red);
    colors.put("g", green);
    colors.put("b", blue);
    
    return colors;
  }
  
}