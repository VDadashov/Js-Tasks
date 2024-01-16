
let inp = document.querySelector(".input");
let eye = document.querySelector("#eye");
let icon = document.querySelector(".icon");

eye.addEventListener("click",()=>{
    if(inp.type == 'password'){
        inp.type = 'text';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }else{
        inp.type = 'password';
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
})

inp.addEventListener("copy",(e)=>{
    e.preventDefault();
})
