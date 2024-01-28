let addBtn = document.querySelectorAll('.addBtn')
let body = document.querySelector('body');
let basket = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let listCard = document.querySelector(".listCard")
let total = document.querySelector(".total");

let arr = JSON.parse(localStorage.getItem("basket"));

basket.addEventListener('click',()=>{
    body.classList.add('active');
});

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
});


addBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let id = this.parentNode.getAttribute("data-id");
        if(localStorage.getItem("basket") == null){
            localStorage.setItem("basket",JSON.stringify([]));
        }
        let existProduct = arr.find((p) => p.id == id);
        
        if(existProduct == undefined){
            arr.push({
                id : id,
                imgUrl : this.parentNode.firstElementChild.getAttribute("src"),
                title : this.parentNode.firstElementChild.nextElementSibling.innerText,
                price : this.previousElementSibling.innerText,
                count : 1
            })

        }else{
            existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr)); 
        BasketTotalCount();
        reloadBasket();
    }); 
});

BasketTotalCount();

function BasketTotalCount(){
    let quantity = document.querySelector(".quantity");
    let sum = 0;
    if(arr != null){
        arr.forEach(item => {
            sum+=item.count;
        });
    }
    quantity.innerHTML = sum;
    
}
reloadBasket();

// document.addEventListener("load",BasketTotalCount);


function reloadBasket(){
    listCard.innerHTML = '';
    let totalPrice = 0;
    let count = 0;

    if(arr != null){
        arr.forEach(item => {
            totalPrice = totalPrice + Number(item.price.slice(0,item.price.length-1));
            count = count + item.quantity;

            let newDiv = document.createElement('li');

            newDiv.innerHTML = `
                <div><img src="${item.imgUrl}"></div>
                <div>${item.title}</div>
                <div>${item.price.slice(0,item.price.length-1)*item.count}$</div>
                <div>
                    <button>-</button>
                    <div class="count">${item.count}</div>
                    <button>+</button>
                </div>`;
            listCard.appendChild(newDiv);
        });
    }

    total.innerText = totalPrice + "$";
}
sum=0

function name(){
    sum++;
}

name()

