function descendingOrder(n){
  return n.toString().split('').sort((a,b) => Number(b-a))
}