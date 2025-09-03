function exchangeWith(a, b) {
  let x = [...a].reverse()
  let y = [...b].reverse()
  a.length = 0
  b.length = 0
  for(let i of y)a.push(i)
  for(let i of x)b.push(i)
}