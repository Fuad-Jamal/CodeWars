class Solution{
    public static int repeats(int [] arr){
      int count =0;  
      for(int i=0; i<arr.length; i++){
          int occur = 0;
        for(int j=0; j<arr.length; j++){
          if(arr[i]==arr[j]){
            occur++;
          }
        }
        if(occur==1){
          count+=arr[i];
        }
        }
      return count;
    }
}