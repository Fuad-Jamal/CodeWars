function digitize(n) {
    return n.toString().split('').reverse().map(Number)
  } 
  console.log(digitize([2,3,2,1,3,4]))