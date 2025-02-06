function solution(number){
  if (number<0) return 0;
  
  const data = []
  for (let num=0; num<number; num++){
    if(num%3===0 || num%5===0){
      data.push(num)
    }
  }
  let addition = 0
  for(multiple of data){
    addition+= multiple
  }
  return addition
}