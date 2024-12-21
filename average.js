function findAverage(array) {
    let x = array.reduce((acc,num)=>acc+num, 0)
    if(array.length===0){
      return 0
    }else{
      return x/array.length
    }
  }
  console.log(findAverage([4,4,2,23,4]))
