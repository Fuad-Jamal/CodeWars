function upArray(arr){
  if(arr.length===0) return null
  for(let i=0; i<arr.length; i++){
    if(!Number.isInteger(arr[i]) || arr[i]<0 || arr[i] > 9) return null
  }
  let x = BigInt(arr.join``)+1n
  let y = x.toString().split('').map(Number)
  if(y.length<arr.length){
    let pad = Array(arr.length-y.length).fill(0)
    y= pad.concat(y)
  }
  return y
} 