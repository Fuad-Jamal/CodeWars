function digPow(n, p){
    let exp = p
let value = n.toString().split('').map(Number)
let mapdValue = value.map((y)=>{
  let result = y ** exp
    exp++
  return result
})
let sum = mapdValue.reduce((a,b)=>a+b,0)
return sum%n === 0? sum/n: -1
}