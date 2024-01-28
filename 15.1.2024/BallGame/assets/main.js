const stack = document.querySelector("#stack");
const ball = document.querySelector("#ball");
let stackX = 0;
let ballX = 0;
let ballMx = 5;
let ballY = 0;
let ballMy = 5;

onkeydown = barMove;
let set = setInterval(ballMove, 40);

function barMove(e) {
    if (e.keyCode == 39) {
        if (stackX < 700) {
            stackX += 25;
        }
    }

    if (e.keyCode == 37) {
        if (stackX > 0) {
            stackX -= 25;
        }
    }


    stack.style.left = stackX + 'px';

}

function ballMove(){
    // X oxu
    if(ballX < 0 || ballX > 745){
        ballMx *= -1;
    }

    // Y oxu

    if(ballY < 0){
        ballMy *= -1;
    }else if(ballY > 550 && ballX >= stackX - 25  && ballX <= stackX + 75){
        ballMx += 1;
        ballMy += 1;
        ballMy *= -1;
    }else if(ballY > 550){
        let result = confirm("Uduzdunuz yeni oyuna baslamaq isteyirsinizmi?");
        clearInterval(set);
        if(result){
            location.reload();
        }else{
            alert("Oyun bitdi");
        }
    }
    
    ballX += ballMx;
    ballY += ballMy;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

}

