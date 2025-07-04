function sumStrings(a,b) { 
let x = a.padStart(Math.max(a.length,b.length),0)
let y = b.padStart(Math.max(a.length,b.length),0)
let result = '';
let carry = 0;
for(let i = x.length-1; i>=0; i--){
  let one = +x[i]
  let two = +y[i]
  let add = one + two + carry
  let dig = add%10
  carry = Math.floor(add/10)
  result = dig + result
}
  if(carry) return result = carry+result
  
  return result.replace(/^0+/,'') || 0
}