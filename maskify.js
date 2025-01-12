// return masked string
function maskify(cc) {
    let bib = cc.toString().split('')
    for (let i = 0; i < cc.length -4; i++){
      bib[i] = '#'
    }
      return bib.join('')
    }
    console.log(maskify(28949288328))