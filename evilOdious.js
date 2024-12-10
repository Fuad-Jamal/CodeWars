function evil(n) {
    const aim = n.toString(2).split('1').length - 1;
    if (aim%2===0){
      return "It's Evil!"
    }else{
      return "It's Odious!"
    }
    
  }