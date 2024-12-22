var summation = (num) => {
    let add = 0
    for (let i = 1; i<=num; i++){
        add+=i
    }
    return add
}
console.log(summation(3,2,3,2,2,3,3,2))