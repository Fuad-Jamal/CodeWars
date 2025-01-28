function sumTwoSmallestNumbers(numbers) {  
    let add = 0
    let count = 0
      // Code here
      let all = [...numbers].sort((a,b)=>a-b)
    for(const nam of all)
    if(count<2){
        add+=nam
        count++
    }
    return add
    }
    console.log(sumTwoSmallestNumbers( [19, 5, 42, 2, 77]))