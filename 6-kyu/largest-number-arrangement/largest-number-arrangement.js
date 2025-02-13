const largestArrangement = array => {
  // TODO
  let x = array.map(String)
  let y = x.sort((a,b)=>(b+a) - (a+b))
  if(array[0] == '0'){
    return '0'
  }
  return Number(y.join(''))
}