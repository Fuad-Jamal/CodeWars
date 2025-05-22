 
function getMiddle(s) {
    let mid = s.charAt(s.length/2)
    let mid2 = s.charAt(mid) + s.charAt(mid+1)
    if(s.length%2 !== 0){
   return mid
    }else{
       return mid2
    }
}