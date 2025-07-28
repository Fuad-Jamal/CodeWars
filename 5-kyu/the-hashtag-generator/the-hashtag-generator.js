function generateHashtag (str) {
  if(str === ''|| /^\s+$/.test(str)) return false
  let x = str.split(' ').filter(Boolean)
  let y = x.map(z=>z[0].toUpperCase()+z.slice(1).toLowerCase()).join``
  let result = '#'+y
  return result.length>140? false: result
}