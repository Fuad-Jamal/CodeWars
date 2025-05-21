function colourful(number) {
  const nums = [...number.toString()].map(Number)
  const result = new Set()
  
  for(let start = 0; start < nums.length; start++){
    let product = 1
    
    for(let end = start; end < nums.length; end++){
      product *= nums[end]
      
      if(result.has(product)){
        return false
      }
      result.add(product)
    }
    }
  return true
}
​