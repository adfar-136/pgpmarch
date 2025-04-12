var person1 = {
    name :"hello",
    lname :"Rasheed"
}

var jsonobj = JSON.stringify(person1)
var obj = JSON.parse(jsonobj)
console.log(obj)