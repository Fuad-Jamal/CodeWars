function getMiddle(s) {
    let mid = Math.floor(s.length/2)
    
    if(s.length%2 === 0){
   return s.charAt(-1) + s.charAt(mid)
    }else{
       return s.chartAt(mid)
    }
}