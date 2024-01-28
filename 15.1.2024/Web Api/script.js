// console.log(1);

// console.log(2);

// setTimeout(()=>{
//     alert("salam");
// },2000)

// console.log(3);


// setTimeout setinterval


function salam(){
    console.log(2);
}

// setInterval(() => {
//     salam();
// }, 1000);


// setInterval(salam, 1000);



let time = setInterval(() => {
    let time = new Date().toLocaleTimeString();
    document.querySelector("h1").innerHTML = time;
}, 1000);


document.querySelector("button").addEventListener("click",()=>{
    clearInterval(time);
})