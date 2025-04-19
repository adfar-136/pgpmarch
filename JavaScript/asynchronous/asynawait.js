// function greet(){
//     return new Promise((resolve,reject)=>{
//         resolve("Done")
//     })
// }
// console.log(greet())
// greet().then((x)=>{
//  console.log(x)
// }).catch(()=>{

// })
var promise = new Promise((resolve,reject)=>{
    resolve("Adfar Rasheed")
})
console.log("a")
async function greet(){
    console.log("1")
    // promise.then((x)=>{
    //     console.log(x)
    // })
    const result = await promise;
    console.log(result)
    console.log("2")
}
console.log("b")
greet()
console.log("c")



// async function greet(){
//     return "Adfar"
// }
// greet().then((x)=>{
//     console.log(x)
// })