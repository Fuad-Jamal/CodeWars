function censor(sentence) {
  
    const pans = ['pancakes', 'flapjacks', 'slapjacks', 'hotcakes']
    const wafs = ['waffles', 'crepes', 'blintzes']
    const tops = ['syrup', 'honey', 'butter', 'jam', 'chocolate', 'margarine']
​
    const arg = sentence.split(' ')
    const hasWafs = arg.some(w => wafs.includes(w.toLowerCase()))
    
    const result = arg.map(w => {
      let ban = w.toLowerCase()
      
      if(pans.includes(ban)){
        return '*'.repeat(w.length)
      }else if(wafs.includes(ban)){
        return `**${w}**`
      }else if(tops.includes(ban)){
        return hasWafs? `**${w}**` : '*'.repeat(w.length)
      }else{
        return w
      }
    })
    return result.join(' ')
        
}