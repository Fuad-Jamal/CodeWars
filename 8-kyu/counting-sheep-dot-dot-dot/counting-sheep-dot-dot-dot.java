public class Counter {
    public static int countSheeps(Boolean[] arrayOfSheeps) {
      int[] ones={1,1,1,0,0,1,0,1,0,1,0,1};
        int counter = 0;
      for(int i=1; i<ones.length; i++){
        if(ones[i]!=1){
          continue;
        }
        counter+=ones[i];
      }
//       for(Boolean sheep: arrayOfSheeps){
//         if(sheep == true){
//           counter++;
//           continue;
//         }
//       }
   return counter;
    }
}