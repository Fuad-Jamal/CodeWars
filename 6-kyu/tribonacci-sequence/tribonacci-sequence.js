function tribonacci(signature,n){
  if(n === 0) return []
  if( n <= 3) return signature.slice(0, n)
  const answer = [...signature]
  while( answer.length < n){
    answer.push(answer.slice(-3).reduce((a,b) => a+b,0))
  }
  return answer
}