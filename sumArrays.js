function arrayPlusArray(arr1, arr2) {
    let x = arr1.concat(arr2)
    return x.reduce((acc,num)=>acc+num,0)
  }
  console.log(arrayPlusArray([3,4,5],([4,2,2,13])))