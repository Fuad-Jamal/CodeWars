 
function duplicateCount(text){
  let lower = text.lowerCase()
  let count = {}
  for(letter of lower){
    count[letter] = count[letter] = 0 || +1
  }
  let duplicate = object.values(count).filter(nam => nam>1).length
  return duplicate
}