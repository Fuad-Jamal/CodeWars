function disemvowel(str) {
    let vowel = ['a','i','e','o','u','A','E','I','O','U']
    let remove = str.split('')
    let ans = remove.filter(letter => !vowel.includes(letter))
    return ans.join('')
  }
    console.log(disemvowel("This website is for losers LOL!")) 