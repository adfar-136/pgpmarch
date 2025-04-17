const promise = new Promise((resolve, reject)=>{
 var data = 10;
 if(data === 1670){
    resolve("Adfar Rasheed")
 } else {
    reject("errorrrrrr")
 }
})



promise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


// promise.then((result)=>{
//     console.log(result)
// },(error)=>{
//    console.log(error)
// })