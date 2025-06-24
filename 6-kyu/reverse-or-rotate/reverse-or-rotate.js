function revrot(str, sz) {
    if(sz<=0 || sz === '' || sz> str.length) return ''
      let chunks = []
  for(let s=0; s<=str.length - sz; s +=sz){
    chunks.push(str.slice(s, s+sz))
  }
  let result = chunks.map((chunk)=>{
    let add = chunk.split('').map(Number).reduce((a,b) => a+b)
    if(add%2 === 0) {
      return chunk.split('').reverse().join('')
      }else{
        return chunk.slice(1) + chunk[0]
      }
  })
  return result.join('')
}