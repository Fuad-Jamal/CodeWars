 
function filter_list(l) {
  let y = l.filter((x) =>{
    if(!Number(x))
      return x
  })
  return y
}