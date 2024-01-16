// console.log(this);

// let x = document.all;

// let newArr = Array.from(x);

// newArr.forEach(element => {
//     console.log(element);
// });


// let collection = document.getElementsByClassName("yazi");

// console.log(collection);

// let newArr = Array.from(collection);

// newArr.forEach((item)=>{
//     item.style.color = "red";
// })


// let h1 = document.querySelectorAll(".yazi");

// h1.forEach((item)=>{
//     console.log(item);
// })


// mouse event

// let container = document.querySelector(".container");

// container.addEventListener('mouseenter',test);   
// container.addEventListener('mouseover',test);

// container.addEventListener('mouseleave',test);
// container.addEventListener('mouseout',test);

// container.addEventListener('mousemove',test);


// function test(e){
//     let p = document.querySelector('p');
//     p.innerHTML = `X : ${e.clientX} - Y : ${e.clientY}`;

//     container.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${(Number(e.clientX) + Number(e.clientY)) / 2})`
// }


// copy,keyup,keydown,blur,focus,input

let inp = document.querySelector(".inp");
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    // e.preventDefault();

    console.log(e);
})





