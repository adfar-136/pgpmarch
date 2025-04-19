console.log("1")
var promise= new Promise((resolve,reject)=>{
   console.log("2")
   resolve("3")
})

promise.then((res)=>{
    console.log(res)
})
console.log("4")