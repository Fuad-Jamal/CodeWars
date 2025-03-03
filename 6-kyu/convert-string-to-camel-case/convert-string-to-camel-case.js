function toCamelCase(str){
let split = str.split(/[_-]/)
let answer = split.map((char, index) => {
  if(index === 0){
    return char
  }else{
    return char.charAt(0).toUpperCase() + char.slice(1)
  }
})
return answer.join('')
}