function alphabetPosition(text) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let pos= text.toLowerCase().split('')
  let place = pos.filter(ans => letters.includes(ans)).map(ans2 => letters.indexOf(ans2) + 1)
  return place.join(' ')
  
}