function towerBuilder(floors) {
  let block = []
  for (let i=0; i<floors; i++){
    let lines = ' '.repeat(floors - i - 1)
    let star = '*'.repeat(2*i + 1)
    let row = lines + star + lines
    block.push(row)
  }
  return block
}