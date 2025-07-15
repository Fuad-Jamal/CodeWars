function incrementString (strng) {
  let match = strng.match(/(\d+)$/)
  if(!match) return strng+'1'
  let nums = match[1]
  let sliced = strng.slice(0,-nums.length)
  let incr = String(Number(nums)+1)
  if(incr.length<nums.length){
    incr = incr.padStart(nums.length,'0')
  }
  return sliced + incr
}