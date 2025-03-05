var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let answer = [...iterable]
  return answer.filter((char, index) => char != iterable[index -1])
}