function digitalRoot(n) {
  if(n<10) return n
  let sum = n.toString().split('')
  let x = sum.reduce((a,b) => a + parseInt(b),0)
  return digitalRoot(x)
}