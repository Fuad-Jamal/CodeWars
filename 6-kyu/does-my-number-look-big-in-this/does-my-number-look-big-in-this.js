function narcissistic(value) {
  let x = value.toString().length
  let y = value.toString().split('').map((xx)=>{
      let exp = Number(xx)
     return exp**x
  })
 let sum = y.reduce((a,c)=> a+c,0)
 return sum === value? true: false
}
​