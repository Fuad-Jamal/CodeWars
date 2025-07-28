function moveZeros(arr) {
    
  let zero = arr.filter(y=>y===0)
  let nonZero = arr.filter(y=>y!==0)
  let soln = [...nonZero,...zero]
  return soln
}