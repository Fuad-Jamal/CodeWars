function findShort(s){
  let x = s.split(' ').map(y=>y.length)
  return Math.min(...x)
}