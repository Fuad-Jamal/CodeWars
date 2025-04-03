function deleteNth(arr,n){
  let count = {}
  let answer = []
  
  for (let num of arr){
    if(count[num] === undefined){
      count[num] = 0
    }
   if(count[num] < n){
    answer.push(num)
     count[num] ++
  }
  }
  return answer
}