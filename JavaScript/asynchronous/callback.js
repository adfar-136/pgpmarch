// function getData(callback){
//     setTimeout(()=>{
//         console.log("ADfar Rasheed")
//         callback()
//     },1000)
// }
// getData(()=>{
//     console.log("helooooo======")
// })

// setTimeout(()=>{
//     console.log("1st")
//     setTimeout(()=>{
//        console.log("2nd")
//        setTimeout(()=>{
//         console.log("3rd")
//         setTimeout(()=>{
//             console.log("4th")
//         },1000)
//     },1000)
//     },1000)  
// },1000)

function greet(p,d){
    return new Promise((resolve)=>{
       setTimeout(()=>{
        console.log(p)
        resolve()
       },d)
    })
}
greet("1st",1000)
.then(()=>greet("2nd",1000))
.then(()=>greet("3rd",1000))
.then(()=>greet("4th",1000))


