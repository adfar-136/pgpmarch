//function statement
// greet()
// // function greet(){
// //     console.log("adfar")
// //     return "good morning"
// // }
// // greet()
 
//function expression
// console.log(greet())
// var greet = function (){
//   console.log("Adfar")
//   return "hello"
// }

//fat arrow functions

// var sum = function(x){
//   console.log(x*x)
//   return x*x
// }
// sum(2)

// var sum = (x)=>{
//     console.log(x*x)
//     return x*x
// }
// sum(8)

// var sum =function(x){

//     return x*x
// }

// var sum =x=>x*x;
// console.log(sum(7));

function greet(x,y,z){
    console.log(x())
    console.log(y+z)

}

//anonymous function
(function (x){
    console.log("Good morning")
})(6) //iif

greet(()=>{
    console.log("hello")
},5,6) //higher order function