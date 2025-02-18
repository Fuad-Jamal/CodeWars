function encode(string) {
  let vow = ['a','e','i','o','u']
  let s = ''
  for(const char of string){
    let x = vow.indexOf(char)
    if(x !== -1){
     s += (x+1)
    }else{
       s += char
    }
  }
  return s
}
​
function decode(string) {
  let x = ['1','2','3','4','5']
  let y = ['a','e','i','o','u'] 
  let dec = string.split('')
  let ans = dec.map(char =>{
    let num = x.indexOf(char)
    if(num !== -1){
      return y[num]
    }else{
      return char
    }
  })
      return ans.join('')
}