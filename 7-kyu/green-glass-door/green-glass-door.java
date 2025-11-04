public class GreenGlassDoor {
  
  boolean stepThroughWith(String s) {
if(s==""||s.length()<1) return false;
    s = s.toLowerCase();
    for(int i=0; i<s.length()-1; i++){
      char char1 = s.charAt(i);
      char char2 = s.charAt(i+1);
      
      if(char1==char2) return true;
    }
    return false;
  }
  
}