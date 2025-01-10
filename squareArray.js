function squareDigits(num){
    let x = num.toString().split('')
    return x.map((num)=>num*num)
  }
  console.log(squareDigits(38535))