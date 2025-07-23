function toUnderscore(string) {
  let result = ''
    if(typeof string === 'number') return `${string}`
    for(let x =0; x<string.length; x++){
      
      if(x!==0 && /[A-Z]\d/.test(string[x])){
      result += '_'
    }else{
      result += string[x]
    }
    }
    return result.toLowerCase()
}