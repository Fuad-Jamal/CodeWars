function intersect(...arrays) {
    if(arrays.length === 0) return []
  
 const [one, ...others] = arrays
  let x = one.filter(y=>others.every(z=>z.includes(y)))
  return x
}