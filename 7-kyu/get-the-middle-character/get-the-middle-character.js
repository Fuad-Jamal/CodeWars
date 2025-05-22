function getMiddle(s) {
    const mid = Math.floor(s.length/2)
    
    if(s.length%2 === 0){
   return s.charAt(mid -1) + s.charAt(mid)
    }else{
       return s.charAt(mid)
    }
}