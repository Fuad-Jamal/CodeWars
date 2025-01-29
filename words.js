function reverseWords(str) {
    // Go for it
    let ans = str.split(' ').map(word => word.split('').reverse().join(''))
    return ans.join(' ')
  }
    console.log(reverseWords("This is an example!")) 