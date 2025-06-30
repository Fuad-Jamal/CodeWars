function cleanString(s) {
  if(s==="" || /^#+$/.test(s) ) return ""
  
  let result = []
  for(const l of s){
    if(l!=='#'){
      result.push(l)
    }else if (l==='#' && result.length!==0){
      result.pop(s.length-1)
    }
  }
  return result.join('')
  
}