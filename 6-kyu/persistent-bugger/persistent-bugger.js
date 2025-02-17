function persistence(num) {
   //code me
  let start = 0
  while(num>=10){
    let nums = String(num).split('')
    num = nums.reduce((x,y) => x *= +y)
    start ++
  }
  return start
}