let fileInp = document.querySelector("input");
let text = document.querySelector(".text");


// fileInp.addEventListener("change", (e)=>{
//     let fileR = new FileReader();

//     console.log(e.target.files);
//     // console.log(e.target.files[0]);
//     // console.log(fileR);
//     // console.log(fileR.result);
//     // fileR.readAsText(e.target.files);
//     fileR.readAsDataURL(e.target.files[0]);


//     console.log(fileR.result);

//     fileR.addEventListener("load",()=>{
//         // text.innerHTML = fileR.result;
//         let img = document.createElement('img');
//         img.src = fileR.result;
//         text.append(img);
//     })
// })


// drag&drop


let li = document.querySelectorAll("li");
let ul = document.querySelectorAll("ul");

li.forEach(item =>{
    item.addEventListener("dragstart", ()=>{
        item.classList.add("active");
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("active");
    })
})


ul.forEach(item =>{
    item.addEventListener("dragover",()=>{
        let selectLi = document.querySelector(".active");
        item.appendChild(selectLi);
    })
})