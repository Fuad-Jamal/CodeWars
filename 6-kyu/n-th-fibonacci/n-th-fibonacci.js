function nthFibo(n) {
    if(n===1) return 0
   if(n===2) return 1
  
  let x = 0
 let y = 1
 for(let p = 2; p<=n; p++){
   [x,y] = [y, x+y]
   
 }
  return x
}