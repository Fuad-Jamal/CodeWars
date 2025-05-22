 
function filter_list(l) {
 return l.filter((x)=>{
     if(Number(x)) return x
 })
}