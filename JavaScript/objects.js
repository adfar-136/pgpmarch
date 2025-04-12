var person = {
    fname :"Adfar",
    lname:"Rasheed",
    age:25,
    married:false,
    skills: ["HTML","Css","JS"],
    education : {
       degree : "BTECH",
       year : 2025
    }
}
var person1 = {
    name :"hello"
}
// var p1 = Object.assign({},person)
// console.log(p1)
// var p1 = {...person};
var p1 = JSON.parse(JSON.stringify(person))
p1.education.degree = "BBA";
console.log(person)


// const keys = Object.keys(person)
// console.log(keys)
// const values = Object.values(person)
// console.log(values)
// const entries = Object.entries(person)
// console.log(entries)
// console.log(person.skills)
// console.log(person["married"])

