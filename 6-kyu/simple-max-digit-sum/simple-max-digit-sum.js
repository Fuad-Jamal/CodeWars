 
function solve(n){
    if(n===0) return 0
  let x = solve(n-1)
  let nss = n.toString().split('').reduce((a,b)=> a+ +b)
  let z = x.toString().split('').reduce((a,b)=>a+ +b,0)
  if(nss>z) return n
  if(nss<z) return x
  return n>x? n:x
}