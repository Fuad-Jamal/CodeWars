function getCount(str) {
    let x = str.split('')
    let y = []
    let z = ['a','e','i','o','u']
    for(const i of x){
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
            y.push(i)
        }
    }
    return y.length
    }
    console.log(getCount('abracadabra'))