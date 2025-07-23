function reverse(str){
  let x = str.split(' ').filter(Boolean)
  return x.map((x,y)=>{if(y%2===1){
    return x.split('').reverse().join``
  }else{
    return x
  }}).join` `
}