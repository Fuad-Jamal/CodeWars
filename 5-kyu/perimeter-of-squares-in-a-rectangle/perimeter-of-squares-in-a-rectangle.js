function perimeter(n) {
  if(n == 0)
    return 4
  
    let a =1
    let b = 1
    let sum = a+b
  for(let x=2; x<=n; x++){
    let ans = a+b
    sum += ans
    a=b
    b = ans
    
  }
  return sum * 4
}