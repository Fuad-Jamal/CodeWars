function longest(s1, s2) {
  return [...new Set(s1+s2)].sort((a,b)=>a.localeCompare(b)).join``
}
​