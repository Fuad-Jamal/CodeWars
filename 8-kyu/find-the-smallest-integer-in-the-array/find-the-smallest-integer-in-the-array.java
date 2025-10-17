public class SmallestIntegerFinder {
    public static void findSmallestInt(int[] args) {
        int low = args[0];
      for(int arg: args){
        if(arg<low){
          low =arg;
        }
      }
    }
}