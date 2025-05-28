function formatWords(words){
   if (!words || words.length === 0 ) return ''
    words = words.filter(word => word)
  
 if(words.length === 2){
     return words[0] + ' and ' + words[1]
 }else if(words.length === 1){
     return words[0]
 }else if(words.length>2){
     return words.slice(0, -1).join(', ')+ ' and ' + words.slice(-1)
 }else if(words.length === 0){ return ''}
 
}