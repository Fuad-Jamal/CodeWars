function filter_list(l) {
 return l.filter((x)=>{
   if(!typeof x === 'string') return x
 })
}