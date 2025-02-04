function accum(s) {
  // your code
    let ans = s.split('').map((word, times)=>word.toUpperCase() + word.toLowerCase().repeat(times))
    return ans.join('-')
    
}