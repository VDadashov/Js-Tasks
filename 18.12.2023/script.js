const inp = document.getElementById("inp");
const ul = document.getElementById("ul");

function add(){

    // li create
    let newLi = document.createElement('li');
    newLi.classList.add("list-group-item","d-flex","justify-content-between");
    newLi.textContent = inp.value;
    ul.appendChild(newLi);
    //deleteBtn create
    let newBtn = document.createElement('button');
    newBtn.classList.add('btn','btn-danger','btn-sm');
    newBtn.textContent = 'Delete';
    newBtn.setAttribute('onclick','Delete(this)')
    newLi.append(newBtn);
    inp.value = ""
}
function Delete(item){
    item.parentElement.remove();
}

// let h1 = document.querySelector("h1");

// h1.addEventListener("click",()=>{
//     h1.classList.toggle("red")
// })