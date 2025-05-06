// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  let key = string.split('.')
  let result = this
  
  for(let one of key){
    if(result && result[one] !==undefined){
      result = result[one]
  }else{
    return undefined
  }
    }
  return result
}