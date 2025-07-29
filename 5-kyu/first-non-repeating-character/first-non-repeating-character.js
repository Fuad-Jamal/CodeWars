function firstNonRepeatingLetter(s) {
  if(s === ''|| s === undefined) return ''
  let x = s.toLowerCase().split('')
  let t=x.map(y=>x.indexOf(y)===x.lastIndexOf(y))
  return x[t.indexOf(true)]===undefined?'':s[t.indexOf(true)]
}
​