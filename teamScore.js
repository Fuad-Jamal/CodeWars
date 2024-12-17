function uefaEuro2016(teams, scores){                                                                                                                   
    let [t1,t2] = teams
  let [s1,s2] = scores
  if (s1>s2){
      return `At match ${t1} - ${t2}, ${t1} won!`
  }else if(s1<s2){
      return `At match ${t1} - ${t2}, ${t2} won!`
  }else{
      return `At match ${t1} - ${t2}, teams played draw.`
  }
  }
  console.log(uefaEuro2016(['shaktar','marseille'],[3,1]))