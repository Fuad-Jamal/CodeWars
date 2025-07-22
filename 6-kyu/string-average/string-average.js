function averageString(str) {
  if(str === '') return 'n/a'
  const words = {
    'zero':0, 'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7,
    'eight': 8, 'nine':9
  }
  let stu = str.split(' ')
  let avgs =0
  if(stu.every(word =>words.hasOwnProperty(word))){
    let nums = stu.map(word=>words[word])
    let total = nums.reduce((a,b)=>a+b)
    let avg = Math.floor(total/nums.length)
    avgs+=avg
  }else{
    return 'n/a'
  }
  for(let result in words){
    if(words[result]=== avgs)return result
  }
}