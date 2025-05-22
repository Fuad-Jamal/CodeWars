function filter_list(l) {
  let y = l.filter((x) =>{
    if(x ! = Number(x))
      return x
  })
  return y
}