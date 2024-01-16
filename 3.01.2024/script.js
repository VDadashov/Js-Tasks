// function Person(name,surname){
//     this.name = name,
//     this.surname = surname
//     // this.friends = []
// }

// Person.prototype.friends = []

// const eleddin = new Person("Eleddin", "Cebilov");
// const nizami = new Person("Nizami","Sukurov");

// eleddin.friends.push("Nermin");

// console.log(eleddin.friends);
// console.log(nizami.friends);


// let user = {
//     name : "Bill",
//     surname : "Gates",
//     getName : function(){
//         console.log(this.name);
//     },
//     getSurname: ()=>{
//         console.log(this.surname);
//     }
// }

// user.getName(); // Bill
// user.getSurname(); // undefined


class Person{
    constructor(name, surname, age){
        this.name = name,
        this.surname = surname,
        this.age = age
    }

    static friends = ['Nermin']

    addFriends(value){
        this.friends.push(value);
    }
}


const eleddin = new Person("Eleddin", "Cebilov",19);
const nizami = new Person("Nizami","Sukurov", 23);

console.log(Person.friends);

// eleddin.addFriends("Nermin");

// console.log(eleddin);
// console.log(nizami.friends);


// person super parent
// user sub child

// class User extends Person{
//     constructor(name, surname, age, job){
//         super(name, surname, age);
//         this.job = job
//     }
// }

// const vusal = new User("Vusal","Dadashov",19,"Full-Stack");

// console.log(vusal instanceof User);
// console.log(eleddin instanceof Person);
// console.log(eleddin instanceof User);
// console.log(vusal instanceof Person);


