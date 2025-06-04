function whitespaceNumber(n) {
    if(n===0) return ' \n'
    
    let bin = ''
    let num = Math.abs(n)
    while(num>0){
        bin = (num%2 === 0? ' ': '\t')+ bin
        num = Math.floor(num/2)
    }
    
    let result = ''
    
     switch(true){
         case n>0:
            result = ' '+ bin + '\n'
            break;
        case n<0:
            result = '\t' + bin + '\n'
            break;
     }
    
    return result
  }