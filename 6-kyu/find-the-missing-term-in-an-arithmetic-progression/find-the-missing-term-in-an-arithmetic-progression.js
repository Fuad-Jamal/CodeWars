function findMissing(list) {  
  const n = list.length
  let diff = Math.min(list[1] - list[0], list[2] - list[1]) 
  
  for(let i = 0; i<n-1; i++){
    if(list[i + 1] - list[i] != diff){
      return list[i] += diff
    }
  }
  return NaN
}