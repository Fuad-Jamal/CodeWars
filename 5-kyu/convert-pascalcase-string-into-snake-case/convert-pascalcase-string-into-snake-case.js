 
function toUnderscore(string) {
  let result = ''
    if(typeof string === 'number') return `${string}`
    for(let x =0; x<string.length; x++{
      
      if(x!==0 && /[A-Z]/.test(string[i])){
      result += '_'
    }else{
      result += string[i]
    }
    }
    return result.toLowerCase()
}