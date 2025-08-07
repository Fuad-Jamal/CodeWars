function longest(s1, s2) {
  let x = s1+s2
  return [...new Set(x)].sort((a,b)=>a.localeCompare(b)).join``
}
​