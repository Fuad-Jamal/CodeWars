function validBraces(braces){
  const stack = []
  const pair = {
    ")": '(',
    ']': '[',
    '}': '{'
  }
  for(const brace of braces){
    if(brace === '(' || brace === '[' || brace === '{'){
      stack.push(brace)
    }else if(Object.keys(pair).includes(brace)){
      if(stack.length === 0 || stack.pop() != pair[brace]){
        return false
      }
    }
  }
  return stack.length === 0
}