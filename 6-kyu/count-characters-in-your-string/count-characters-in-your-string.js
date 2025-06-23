function count(string) {
  if(string==='') return {}
 let counts = {}
 for(const char of string){
  if(counts.hasOwnProperty(char)){
     counts[char] ++
   }else{
    counts[char] = 1
   }
 }
  return counts
}