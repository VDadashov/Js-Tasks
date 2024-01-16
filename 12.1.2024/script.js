let arr = ["Fatime","Emin", "Nermin","Vusal","Nicat"];

//rest operator
// function name(name1,name2,name3,...arr){
//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
//     console.log(arr);
// }


// spread operator
// name(arr[0],arr[1],arr[2]);
// name(...arr);


let user = {
    name: "Vusal",
    surname: "Dadashov",
    age: 19,
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    }
}

let {name, surname, age,address} = user;

let {street} = address;


// console.log(`UserName: ${name} - UserSurname: ${surname} - UserAge: ${age} - UserStreet: ${street}`);

// try {
//     const age = 19;
//     age = 20;
// } catch (error) {
//     console.log("user db de problem var!");
// }

// console.log("hello");

let vusal = 19;

localStorage.setItem("age",JSON.stringify(19));
localStorage.setItem("fAge",JSON.stringify(19));

// localStorage.removeItem("age");
localStorage.clear();

// let h1 = document.querySelector("h1");

// h1.innerHTML = localStorage.getItem("age");

// sessionStorage.setItem("age",JSON.stringify(19));