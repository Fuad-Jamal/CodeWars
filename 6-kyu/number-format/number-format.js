var numberFormat = function (number) {
    let neg = number<0
    
  let x = Math.abs(number).toString()
  let arr = []
  while(x.length>0){
      arr.unshift(x.slice(-3))
      x = x.slice(0,-3)
  }
  return (neg? '-':'')+ arr.join(',')
};
console.log(numberFormat(-34567876543))
​