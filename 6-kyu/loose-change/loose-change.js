function looseChange(cents){
  // ...
  let coins = {
    'Quarters':0,
    'Dimes':0,
    'Nickels':0,
    'Pennies':0
  }
  if(cents<=0){
    return coins
  }
  cents = Math.floor(cents)
  
  coins['Quarters'] = Math.floor(cents /25)
  cents %= 25
  
  coins['Dimes'] = Math.floor(cents /10)
  cents %= 10
  
  coins['Nickels'] = Math.floor(cents /5)
  cents %= 5
  
  coins['Pennies'] = cents
  
  return coins
}