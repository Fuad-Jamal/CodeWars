 
function filter_list(l) {
 return l.filter(x => typeof(x) === 'number'? x: 0)
}