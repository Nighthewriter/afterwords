let a = [1,2,3,4,4,4,55,6,7,];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value,index , arry)=>{
//     console.log(value,index,arry)
// })

// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }

for (const iterator of a) {
    console.log(iterator)
}