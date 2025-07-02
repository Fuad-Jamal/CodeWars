 
function solve(n){
    if(n===0) return 0
  let x = solve(n-1)
  let z = x.toString().split('').reduce((a,b)=>a+ +b,0)
  return z
}