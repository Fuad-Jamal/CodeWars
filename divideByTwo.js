function isDivisible(n, x, y) {
    if (n%x === 0 && n%y ===0) {
        return true
        }else if (n%x || n%y!== 0 ){
          return false
       }
  }
  
  console.log(isDivisible(4,2,3))