// var arr = [3,4,5,6]
// var arr2 = [...arr];
// // console.log(arr2)
// arr2[3]="adfar";
// console.log(arr2); //call by reference
// console.log(arr);

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var arr4 = [...arr1,...arr2,...arr3]
console.log(arr4);