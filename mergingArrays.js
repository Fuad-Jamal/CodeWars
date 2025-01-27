function mergeArrays(arr1, arr2) {
    return [...new Set ([...arr1, ...arr2])].sort((a,b) => a-b) 
  }([12,12,12,3,4],[42,42,4,241,3,1]);
  console.log(mergeArrays)
