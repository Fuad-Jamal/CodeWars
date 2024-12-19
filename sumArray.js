function sum (numbers) {
    let sumi = 0
    for (let i = 0; i<numbers.length; i++ ){
      sumi += numbers[i]
    }
    return sumi
  }
  console.log(sum([3,2,5,24,5]))