
// let date1 = new Date();
// console.log(date1.getDay());
// let day;
// let text;

// // 1 7
// switch (8) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//        day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;
//     default:
//         text = "Looking forward to the Weekend";
//         break;
//   }

// if(!day){
//     console.log(text);
// }else{
//     console.log(day);
// }


// while(condition){
//     kod bloku
// }


// let sum = 0;
// const num = document.getElementById("num");
// const btn = document.getElementById("btn");
// const h1 = document.getElementById("h1");


// function sum1(){
//     while(50 > sum){
//         sum+= parseInt(num.value);
//         h1.innerText = sum;
//         break
//     }
// }



// btn.addEventListener("click", sum1);



// let i = 1;
// let count=0;

// while(i<3){

//     if(i%2 != 0){
//         break
//     }
  
//     count++;
//     console.log(i);
// }

// do {
//     console.log(i);
//     i++;
//     count++;
// } while (i>4);


// console.log(`count: ${count}`);

// let sum = 0;
// let count = 0;
// let totalSum = 0;

// for(let i = 0; i<=10; i++){
//     sum+= i;
//     count++;
// }

// totalSum = sum;

// console.log(`count: ${count}`);
// console.log(`totalSum: ${totalSum}`);


// const inp = document.getElementById("inp");
// const content = document.getElementById("content");


// function add(){
//     for(let i=1;i <= 50; i++){
//         content.innerHTML += `<input placeholder="client ${i}"/>`;
//     }
// }



const btn = document.getElementById("btn");
let slc = document.getElementById("slc")
let table = document.getElementById("table");



function add(){
    let tbl = "";
    
    for(let i=1;i<=slc.value;i++){
        tbl += `<tr>`

        for(let j=1;j<=slc.value;j++){
            let color = ((i+j)%2 == 0) ? "black" : "";
            console.log(color);
            tbl += `<td style="background:${color};">${i},${j}</td>`
        }

        tbl += `</tr>`
    }

    table.innerHTML = tbl;

}

slc.addEventListener("change",add)




// let a = prompt("adinizi daxil edin:");
// let b = prompt("soyadinizi daxil edin:");


// function sum(a,b){
//     console.log(a+b);
// }

// sum(parseInt(a),parseInt(b));

// function name(ad,soyad){
//     return ad + " " + soyad;
// }

// console.log(name(a,b));

// let x = name(a,b);
// console.log("x:",x);


// btn.addEventListener("click",function(){

// })


function x(){
    count = 0;
}

x();

console.log(count);

// variables scope block func global

















  

