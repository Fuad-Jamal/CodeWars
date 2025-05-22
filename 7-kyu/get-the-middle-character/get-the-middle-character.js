 
function getMiddle(s) {
    let mid = Math.floor(s.length/2)
    let mid2 = s.charAt(mid)+ s.charAt(mid)
    let mid3 = s.charAt(mid2+1)
    if(s.length%2 === 0){
   return mid2
    }else{
       return mid3
    }
}