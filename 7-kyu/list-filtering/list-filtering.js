function filter_list(l) {
  let y = l.map((x) =>{
    if(x !== Number(x))
      return x
  })
  return y
}