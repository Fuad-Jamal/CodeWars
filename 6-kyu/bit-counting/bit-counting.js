var countBits = function(n) {
  let string = n.toString(2)
  let answer = 0
  
  for(let char of string){
    if(char === '1'){
      answer ++
    }
  }
  return answer
};