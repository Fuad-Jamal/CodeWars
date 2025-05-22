 
function filter_list(l) {
 return l.filter((x)=>{
     if(Number.isNaN(x) ) return x
 })
}