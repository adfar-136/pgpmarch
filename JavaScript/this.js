const user = {
    firstName : "ADfar",
    lastName  :"Rasheed",
    sayMyNAme : function (){
        console.log(this.firstName+ " " + this.lastName)
    }
}
user.sayMyNAme()