function order(words){
if(!words)
  return '' 
  
  let find = char => [...char].find(num => num >= '1' && num <= '9')
  let word = words.split(' ').sort((a ,b) => find(a) - find(b))
  
  return word.join(' ')
}