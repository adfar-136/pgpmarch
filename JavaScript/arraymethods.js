// var arr =[2,3,4,5,6]

// var arr = arr.map(function(item,index){
//    return item>3
// })
// console.log(arr)

// // [4,6,8,10,12]
// // var arr2 =[]
// // for(let i =0;i<arr.length;i++){
// //     arr2[i] =arr[i]*2
// // }
// // console.log(arr2)

// var arr =[2,3,4,5,6];
// var arr2 =  arr.filter((item,index)=>{
//    return item < 2
// })
// console.log(arr2)

// var arr = [8,1,0,3,6,9,-100,200,23.5,65,23,54]
// var arr2 = arr.sort((a,b)=>{
//   return b-a
// })
// console.log(arr2)

//-ve a= 23 b =54 , a-b = 23-54 =>-31 => no swap
//0 // no swap   
//+ve => swap, a = 8 ,b =1 ; a-b = 8-1 =7=>+ive => a =1, b =8;

// var arr = [4,5,6,7,8,9,54,9,5,45];
// var ele = 9;
// var x = arr.find((item,index)=>{
//    return item > 100
// })
// console.log(x)
// var x = arr.reduce((total,item,index)=>{
//  return total*=item 
// },0.1)
// console.log(x)

// total =total +item

// var arr = [4,5,6,7,8,9,54,9,5,45];
// var ele = 9;
// var x = arr.findIndex((item,index)=>{
//    return item > 1110
// })
// console.log(x)

// var arr = [5,23,432,32,2];
// var x = arr.some((item,index)=>{
//   return item >1
// })
// console.log(x)

// var arr = [5,23,432,32,2];
// var x = arr.every((item,index)=>{
//   return item >2
// })
// console.log(x)

// var arr=[1,2,3,4,5,6];
// var sum = 0;
// var x = arr.forEach(function(item,index){
//   sum+=item;
// })
// console.log(x)
// console.log(sum)

const fruits =["Apple","Banana","Tomato"];
// fruits.forEach((x,i)=>{
//    console.log(x)
// })
for (let i of fruits){
   console.log(i)
}

// var arr1  = [1,2,3,4]
// var arr2 = [5,6,7,8]
// var arr3 = [9,10,11,12]
// var arr3 = [].concat(arr2,arr1,arr3)
// console.log(arr3)

var arr= [1,2,3,[1,2,[3,[4,5,[[[[[[[[[[[567]]]]]]]]]]],6,7,[1,4,53,4]],4,6],"adfar"]]
var arr2 = arr.flat(Infinity)
console.log(arr2)