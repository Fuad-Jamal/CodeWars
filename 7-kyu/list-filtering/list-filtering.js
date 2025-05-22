 
function filter_list(l) {
 return l.filter(x => !Number(x)? x : l.pop(x))
}