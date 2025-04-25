function highAndLow(numbers){
  let y =''
  for(const x of numbers){
    if(x>x){
      return y+= Math.min(x), Math.max(x)
    }
    }
  return y
}