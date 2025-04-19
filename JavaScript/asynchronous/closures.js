function Incrementor(){
    let count =0;
    return function(){
        count++;
        console.log(count)
    }
}
let inc = Incrementor()
inc()
inc()
inc()
inc()