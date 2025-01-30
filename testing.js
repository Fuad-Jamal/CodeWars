var number=function(array){
    //your awesome code here
   let ans = []
   let time = 1
   for (const word of array){
     ans.push(`${time}: ${word}`)
    time ++
       }
    return ans
  }
    console.log(number(["a", "b", "c"]))