
const bars = document.querySelector(".bars");
const sideBar = document.querySelector(".side-bar");


bars.addEventListener("click",()=>{
    // if(sideBar.classList.contains("active")){
    //     sideBar.classList.remove("active");
    // }else{
    //     sideBar.classList.add("active")
    // }

    sideBar.classList.toggle("active");
})