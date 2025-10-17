public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
        int low = args[0];
      for(int arg: args){
        if(arg<low){
          low =arg;
        }
      }
      return low;
    }
}