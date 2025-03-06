function isPangram(string){
  //...
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const str = string.toLowerCase()
  let found = []
  
  for(let x=0; x<str.length; x++){
    let char = str[x]
    if(alphabet.includes(char) && !found.includes(char)){
      found.push(char)
    }
  }
  return found.length === 26
}