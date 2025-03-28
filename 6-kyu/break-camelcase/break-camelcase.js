function solution(string) {
  if(string === '') return ''
  let result = ''
  for (let i=0; i<string.length; i++){
    if(string[i]=== string[i].toUpperCase() && string[i] !== string[i].toLowerCase()){
      result += ' '
  }
  result += string[i]
}
  return result
  }