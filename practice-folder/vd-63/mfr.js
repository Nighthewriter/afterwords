let arry = [1,2,13,11];

// let newarry = []

// for (let index = 0; index < arry.length; index++) {
//     const element = arry[index];
//     newarry.push(element**2)
// }

let newarry = arry.map((e)=>{
    return e**2
})

console.log(newarry)

const greaterthan =(e)=>{
    if(e>7){
        return true
    }
    return false

}

console.log(arry.filter(greaterthan));


arry2 = [1,2,3,4,5]

const red = (a,b)=>{
    return a*b
}

console.log(arry2.reduce(red))