function countPositivesSumNegatives(input) {
    if(input === null )return []
  let positiveNumbers = 0
  let negativeNumbers = 0
for ( let i=0; i<input.length; i++){
  if (input[i]>0){
     positiveNumbers++
  }else if(input[i]<0){
  negativeNumbers += input[i]
    
  }
}
return input.length !==0? [positiveNumbers,negativeNumbers]:[]
  }
console.log(countPositivesSumNegatives([7,-9,8,-9]))