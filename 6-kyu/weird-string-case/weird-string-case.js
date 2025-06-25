function toWeirdCase(string){
 let one = string.split(' ').map((x)=>{
   return  x.split('').map((y,i)=>{
         if(i%2===0) return y.toUpperCase()
         else return y.toLowerCase()
         
     }).join('')
 })
 
  return one.join(' ')
}