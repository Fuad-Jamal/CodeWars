function high(x) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let letterScores = {}
  letters.forEach((letter, index) => {
    letterScores[letter] = index + 1})
  let words = x.split(' ')
​
  let highestScore = 0
  let answer = ''
  
  for (const word of words) {
    let scoreWord = 0
​
    for (const char of word) {
      scoreWord += letterScores[char]
    }
    if (scoreWord > highestScore) {
      highestScore = scoreWord
      answer = word
    }
  }
  return answer
}