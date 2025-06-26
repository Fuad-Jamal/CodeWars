function solution(text, markers) {
  let test = text.split('\n')
  let result = test.map((line)=>{
                        let min = line.length
                        for(let mark of markers){
    let index = line.indexOf(mark)
    if(index!== -1 && index<min) min=index
  }
  return line.slice(0,min).trimEnd()
                        })
                        return result.join('\n')
}