 
function findOutlier(integers){
  //your code here
  let odd = integers.filter(num => num%2 != 0)
  let even = integers.filter(num => num%2 === 0)
  if(odd.length === 1){
    return odd[0]
  }else{
    return even[0]
  }
}