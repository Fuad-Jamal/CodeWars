function alphanumeric(string){
 if(string === '') return false
  if(/^[a-zA-Z0-9]+$/.test(string)) return true
  return false
}