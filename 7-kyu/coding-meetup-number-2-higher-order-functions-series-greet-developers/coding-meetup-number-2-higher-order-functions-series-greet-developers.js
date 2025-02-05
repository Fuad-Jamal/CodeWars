 
function greetDevelopers(list) {
  // thank you for checking out my kata :)
  let ans = list.map(developer => {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    return developer;
  })
  return ans
}