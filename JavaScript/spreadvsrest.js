//spread operator ...
//rest operator ...

// var arr = [4,5,6,7,8]
// function sum(a,b,c,d,e){
//     var result = a+b+c+d+e;
//     return result
// }
// var x = sum(...arr);
// console.log(xvar tota

function sum(...ot){
    var t = ot.reduce((total,item)=> total+=item)
    console.log(t)
}
sum(2,3,12,12,23,24,2,32,3,23,2423,23,23,343,43,4,23,24,34,34,4,2,23,12,1,2,12,23,24,3)