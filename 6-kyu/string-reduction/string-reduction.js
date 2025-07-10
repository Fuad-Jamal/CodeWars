function solve(a, b) {
if(a.length<b.length) return 0
  let one = {}
  for(let char of a){
    one[char] = (one[char]||0)+1
  }
  let two = {}
  for(let char of b){
    two[char] = (two[char]||0)+1
  }
  let out =0
  for(let letter in one){
    if(!two[letter]){
      out += one[letter]
    }else if(one[letter]>=two[letter]){
      out += one[letter] - two[letter]
    }else{
      return 0
    }
  }
  return out
};