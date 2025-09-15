function longestRepetition(s) {
  if (s ==='') return ["", 0]
​
  let count = 1
  let maxchar = s[0]
  let max = 1
  let current = s[0]
  for (let i =1; i < s.length; i++) {
    if (s[i] === current) {
      count++
    } else {
      current = s[i]
      count = 1
    }
    if (count > max) {
      max = count
      maxchar = current
    }
  }
  return [maxchar, max]
}
​