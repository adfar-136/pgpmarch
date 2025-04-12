// const user = {
//     fname : "ADfar",
//     lname : "Rasheed",
//     age :28,
//     sayMyDoY : function (){
//         return new Date().getFullYear() - user.age
//     }
// }
// const user1 = {
//     fname : "ADfar",
//     lname : "Rasheed",
//     age :28,
//     sayMyDoY : function (){
//         return new Date().getFullYear() - user.age
//     }
// }
// function sayMyDoy() {
//     return new Date().getFullYear() - this.age
// }

// function createUser(firstName,lastName,age){
//     const user = {
//         fname : firstName,
//         lname : lastName,
//         age :age,
//         sayMyDoY : sayMyDoy
//     }
//     return user
// }

// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Darshan","R",24)


//global space was polluted


// function createUser(firstName,lastName,age){
//     const user = {
//         fname : firstName,
//         lname : lastName,
//         age :age,
//         sayMyDoY : createUser.methods.sayMyDoy,
//         sayMyName : createUser.methods.sayMyName,
//     }
//     return user
// }
// createUser.methods={
//     sayMyDoy : function(){
//         return new Date().getFullYear() - this.age
//     },
//     sayMyName : function(){
//         return this.fname + " " + this.lname
//     }
// }
// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Darshan","R",24)

// function createUser(firstName,lastName,age){
//     const user = {
//         fname : firstName,
//         lname : lastName,
//         age :age,
//         sayMyDoY : createUser.prototype.sayMyDoy,
//         sayMyName : createUser.prototype.sayMyName,
//     }
//     return user
// }

// const user1 = createUser("Adfar","Rasheed",28)
// const user2 = createUser("Darshan","R",24)

// function createUser(fname,lname,age){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.age =age;
// }
// createUser.prototype={
//     sayMyDoy : function(){
//         return new Date().getFullYear() - this.age
//     },
//     sayMyName : function(){
//         return this.firstName + " " + this.lastName
//     }
// }


class createUser{
    constructor(fname,lname,age){
        this.firstName = fname;
        this.lastName = lname;
        this.age =age;
    }
   sayMyName = function(){
     return this.firstName + " " + this.lastName
   }

}
const user1 =new createUser("Adfar","Rasheed",27)
const user2 =new createUser("Aditya","Jha",24);