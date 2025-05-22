function filter_list(l) {
 return l.filter((x)=>{
     if(NaN(x)) return x
 })
}