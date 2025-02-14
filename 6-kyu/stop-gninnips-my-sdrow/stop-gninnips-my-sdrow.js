function spinWords(string){
  //TODO Have fun :)
  let x = string.split(' ')
  let y = x.map(char => {
    if(char.length>=5){
      return char.split('').reverse().join('')
    }else{
      return char
    }
  })
  return y.join(' ')
}