function isIntArray(arr) {
  if(!Array.isArray(arr)) return false
  if(arr.length === 0 || arr.every(Number.isInteger)) return true
  if(!arr.every(Number)) return false
  return arr.every(x=> typeof x==='number' && x%1===0)? true: false
}