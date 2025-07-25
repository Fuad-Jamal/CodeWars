function stringTransformer(str) {
​
   let y = str.split(' ').reverse().join` `
   let rsu = ''
  for(let i =0; i<y.length; i++){
      let z = y[i]
      if(z === z.toUpperCase()){
          rsu += z.toLowerCase()
      }else{
          rsu+= z.toUpperCase()
      }
  }
  return rsu
}
​