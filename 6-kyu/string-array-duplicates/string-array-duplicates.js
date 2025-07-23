function dup(s) {
let x = s.map(y=>{
  let result = ''
  for(let i=0; i<=y.length; i++){
    if(y[i]!==y[i-1]){
      result += y[i]
    }
  }
})
return result
};