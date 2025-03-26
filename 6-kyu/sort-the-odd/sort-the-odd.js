function sortArray(array) {
  let odd = array.filter((num) => num % 2 != 0).sort((a,b) => a-b)
  let ans = array.map((num) => num%2 != 0? odd.shift(): num)
  return ans
  
}