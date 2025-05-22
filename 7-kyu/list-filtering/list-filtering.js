function filter_list(l) {
 return l.filter((x)=>{
     if(typeof x === 'number'){
       return x
     } else{
       return ISBLANK
     }
 })
}