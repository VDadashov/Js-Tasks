let addBtn = document.querySelectorAll('.addBtn')
let body = document.querySelector('body');
let basket = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");

let arr = JSON.parse(localStorage.getItem("basket"));

basket.addEventListener("click", () => {
    body.classList.add('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove("active");
})


addBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let id = this.parentElement.getAttribute("data-id");
        if (localStorage.getItem("basket") === null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let existProduct = arr.find((item) => item.id == id);

        // console.log(this.parentElement.firstElementChild.getAttribute("src"));

        if (existProduct == undefined) {
            arr.push({
                id: id,
                imgUrl: this.parentElement.firstElementChild.getAttribute("src"),
                title: this.previousElementSibling.previousElementSibling.innerText,
                price: this.previousElementSibling.innerText,
                count: 1
            })

        } else {
            existProduct.count++;
        }

        localStorage.setItem("basket", JSON.stringify(arr));
        basketTotalCount();
        reloadBasket();
    })
})


function basketTotalCount() {
    let arr = JSON.parse(localStorage.getItem("basket"));
    let quantity = document.querySelector(".quantity");
    let sum = 0;

    if (arr != null) {
        arr.forEach(item => {
            sum += item.count;
        })
    }

    quantity.innerHTML = sum;
}

basketTotalCount();


function reloadBasket() {
    listCard.innerHTML = ' ';
    let totalPrice = 0;
    let arr = JSON.parse(localStorage.getItem("basket"));


    arr.forEach(item => {
        let {imgUrl,title,price,count,id} = item;
        totalPrice += price.slice(0,price.length-1) * count;
        let newLi = document.createElement("li");

        newLi.innerHTML = `
            <div class="basketImg"><img src="${imgUrl}"></div>
            <div class="basketTitle">${title}</div>
            <div class="basketPrice">${price.slice(0,price.length-1) * count}</div>
            <div>
                <button onclick="decreaseItem(${id})">-</button>
                <div class="count">${count}</div>
                <button>+</button>
            </div>
        `

        listCard.appendChild(newLi);

    })

    total.innerText = totalPrice;
}

reloadBasket();

function decreaseItem(id){
    let existProduct = arr.find((item) => item.id == id);
    let newArr = [];

    if(existProduct != undefined){
        if(existProduct.count != 1){
            existProduct.count--;
            localStorage.setItem("basket",JSON.stringify(arr));
        }else{
            arr.forEach((item)=>{
                if(item.id != existProduct.id){
                    newArr.push({
                        id : item.id,
                        imgUrl : item.imgUrl,
                        title : item.title,
                        price : item.price,
                        count : item.count
                    })
                }
            })

            localStorage.setItem("basket",JSON.stringify(newArr));
        }
    }

    reloadBasket();
    basketTotalCount();
}