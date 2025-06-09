function solution(hour) {
    let hour2 = String(hour)
 if(hour2.length === 3){
     return hour2.slice(0,1) + ':' + hour2.slice(-2)
 }else if(hour2.length === 4){
     return hour2.slice(0, 2) + ':' + hour2.slice(-2)
 }else if(hour2.length>4 || hour2.length<3){
     throw new Error('raise exception')
 }
}
​