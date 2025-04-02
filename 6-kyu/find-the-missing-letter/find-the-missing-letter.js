function findMissingLetter(array)
{
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
​
  const isUp = array[0] ===array[0].toUpperCase()
  const letter = isUp? uppercase: lowercase
  
  let index = letter.indexOf(array[0])
  for(let i = 0; i<array.length; i++){
    if(array[i] != letter[index + i]){
      return letter[index + i]
    }
  }
  return undefined
}