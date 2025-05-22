function filter_list(l) {
  let y = l.map((x) =>{
    if(x !== Number(x))
      return l.pop(x)
  })
  return y
}