 
function findUniq(string){
let x = string.map(x=>[...new Set(x.toLowerCase().split(''))].sort())
​
let result = x.map(y=>y.join(''))
let tha = result.map((index,i)=> result.indexOf(index)=== result.lastIndexOf(index)? string[i]:false)
for (let item of tha){
    if(item !== false) return item
}
return tha
}
​