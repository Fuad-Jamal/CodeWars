function problem(x){
    console.log((typeof x))
    if(typeof(x) === "string"){
      return 'Error'
     }else{
      return (x*50)+6
     }
  }