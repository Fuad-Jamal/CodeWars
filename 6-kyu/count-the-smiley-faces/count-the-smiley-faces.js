//return the total number of smiling faces in the array
function countSmileys(arr) {
  let result = arr.filter(face =>{
    let eye = face[0] === ';' || face[0] === ':'
    let nose = face.length === 3? face[1] === '-' ||face[1]=== '~': true
    let smile = face.length === 3? face[2] === ')' || face[2]=== 'D': face[1] === ')' || face[1] === 'D'
    
    return eye && nose && smile
  });
  return result.length
}