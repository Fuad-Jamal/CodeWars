function points(games) {
    return games.map((match) => {
  let [x,y] = match.split(':').map(Number);
  if (x>y) {
       return 3
  }else if(x<y) {
       return 0
   }else{
      return 1
       }
      }).reduce((total,score) => total+score, 0);
  }
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))