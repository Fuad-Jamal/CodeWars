function friend(friends){
    let none = []
    let receive = friends.length
    for (i = 0; i<receive; i++){
      if(friends[i].length === 4){
       none.push(friends[i])
      }
    }
        return none
  }
   console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))