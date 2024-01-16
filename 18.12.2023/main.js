// "use strict";


// let sum = 10;

// if(sum == 10){
//     sum++;
// }

// console.log(a);



// function sum1(){
//     console.log(4+4);
// }

// test();



// let test = function(){
//     console.log("hello world");
// }



// let test = ()=>{
//     console.log("hello");
// }


// console.log(this);


// let name1 = "Vusal";
// let name2 = "Fatime";
// let name3 = "Nicat";


// let marka = "BMW";
// let brand = "m4"
// let cost = "30000";
// let isauto = "true";


// let car = {
//     marka : "BMW",
//     brand : "m4",
//     color : "black",
//     cost : 30000,
//     isauto : true
// }



// console.log(f1[f1.length - 1]);

// f1[10] = "Nermin";
// f1[99] = "Sevinc";

// console.log(f1[0]);

// for(let i=0;i<=f1.length - 1;i++){
//     console.log(f1[i]);
// }


// for(let item in f1){
//     console.log(f1[item]);
// }

// for(let item of f1){
//     console.log(item);
// }


// f1.forEach(element => {
//     console.log(element);
// });


let f1 = ["Vusal","Fatime","Nicat"];
let f2 = ["Nermin", "Emin"];
let total = [];

// f1.push("Nermin");
// total.push(...f1,"Eli");

// let name = f1.pop();


// console.log(f1);

// lifo last insert first out
// fifo first insert first out


// crud create read update delete


// f1.shift();
// f1.unshift("Salam");



// console.log(total.concat(f1,f2));


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);


// let cars = ["bmw","mercedes", "lada", "porsche"];

// console.log(cars);


// cars.splice(1,2,"ferrari");
// cars.splice(2, 1,"ferrari")

// console.log(cars);


const inp = document.getElementById("inp");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const ul = document.getElementById("ul");
let todo;



function addItem(){
    addLocal();

    inp.value = "";
    displayItems();

}

function updateItem(index){
    let item = todo[index];
    inp.value = item;
    updateBtn.style.display = "block";
    addBtn.style.display = "none";

    updateBtn.addEventListener("click",()=>{
        todo[index] = inp.value;
        inp.value = "";
        updateBtn.style.display = "none";
        addBtn.style.display = "block";
        displayItems();
    })

}

function deleteItem(index){
    todo.splice(index, 1);
    displayItems();
}

function displayItems(){
    let list = "";
    todo = JSON.parse(localStorage.getItem("todo"));

    for(let index in todo){
        list += `<li class="list-group-item todo-item">${todo[index]} <div class="list-progress">
        <span onclick={updateItem(${index})}><i class="fa-regular fa-pen-to-square me-2"></i></span>
        <span onclick={deleteItem(${index})}><i class="fa-solid fa-trash"></i></span>
        </div></li>`;
    }

    ul.innerHTML = list;
}
displayItems();

function addLocal(){

    if(localStorage.getItem("todo") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todo"));
    }

    todo.push(inp.value);

    localStorage.setItem("todo",JSON.stringify(todo));
    // console.log(JSON.parse(localStorage.getItem("todo")));
}


addBtn.addEventListener("click",addItem);



// let cars = ["bmw","mercedes", "lada", "porsche","sdfs", "porssdvsdche"];

// let newArr = cars.slice(2,5);
// cars.splice(2,2);

// console.log(newArr);

// let numbers = [1,2,3,12,56,343];

// let x =  numbers.find((item) => item%2==0 && item<= 48);

// // console.log(x);

// let test =  numbers.forEach((x, y, arr) => {
//     return x
// })

// let test = numbers.map((x) => {
//     return x > 3
// })

// console.log(test);












