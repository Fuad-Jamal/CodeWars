function highAndLow(numbers){
  let x = numbers.split(' ').map(Number)
  let y = Math.min(...x)
  let z = Math.max(...x)
  return `${z} ${y}`
}