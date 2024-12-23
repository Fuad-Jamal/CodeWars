function positiveSum(arr) {
    let x = 0
    x=arr.filter(number=>number>0)
    return x.reduce((acc,num)=>acc+num,0)
  }
  console.log(positiveSum(3,3,1,1,-7,-9,-6,3,2))