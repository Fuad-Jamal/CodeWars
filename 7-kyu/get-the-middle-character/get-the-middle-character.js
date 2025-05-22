function getMiddle(s) {
    let mid = s.charAt(s.length/2)
    let mid2 = mid + s.charAt(mid+1)
    if(s.length%2 !== 0){
   return mid
    }else{
       return mid2
    }
}