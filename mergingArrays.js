function mergeArrays(arr1, arr2) {
     return [...new Set([...arr1,...arr2])]
   }
   console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))