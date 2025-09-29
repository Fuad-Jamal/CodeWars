function sortByBit(arr) {
  function countBits(num){
  let bin = num.toString(2)
  return bin.split('').filter(one => one==='1').length
  }
  arr.sort((a,b)=>{
    const aBits = countBits(a)
    const bBits = countBits(b)
    return aBits===bBits? a-b: aBits-bBits
  })
}