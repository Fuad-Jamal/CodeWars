function expandedForm(num) {
  let str = String(num)
  let soln = []
  for(let i=0; i<str.length; i++){
    let numb = parseInt(str[i])
    if(numb!==0){
      let exp = numb* Math.pow(10, str.length-1-i)
      soln.push(exp)
    }
  }
   return soln.join(' + ')
}