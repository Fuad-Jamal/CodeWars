 
function getMiddle(s) {
    let mid = Math.floor(s.length/2)
    let mid2 = s.charAt(mid) 
    let yy = s.charAt(mid2+1)
    if(s.length%2 === 0){
   return mid2
    }else{
       return yy
    }
}