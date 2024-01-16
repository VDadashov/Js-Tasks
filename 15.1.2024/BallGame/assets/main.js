let stack = document.querySelector(".stack");
let stackX = 0;

onkeydown = barMove;

function barMove(e){
    if(e.keyCode == 39){
        if(stackX < 525){
            stackX += 25;
        }
    }

    if(e.keyCode == 37){
        if(stackX>0){
            stackX -= 25;
        }
    }

    stack.style.left = stackX + 'px';
}

