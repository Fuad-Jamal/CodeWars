function palindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g,'')
 if(string === '' || string.length === 1 || string.length=== 0 || (string[0]===string[1])) return true
    if(string[0]!== string[string.length - 1]) return false
​
    return palindrome(string.substring(1, string.length - 1))
}