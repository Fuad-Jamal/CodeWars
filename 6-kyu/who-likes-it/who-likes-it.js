function likes(names) {
  switch(names.lenght){
      case 0:
      return 'no one likes this'
      case 1:
      return `${names[0]},${names[1]} like this}`
      case 3:
      return  `${names[0]}, ${names[1]} and ${names[2]} like this}`
      default:
      return `${names[0], ${names[1], and ${names.length-2} like this`
      
  }
}