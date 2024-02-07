var character = document.getElementById("character");
document.addEventListener("click", jump);
var score = 0;
var scoreDiv = document.getElementById("score");

function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(removeJump,300); 
};
function removeJump(){
    character.classList.remove("animate");
}

var block = document.getElementById("block");

function updateScore(){
    score++;
    scoreDiv.innerHTML = "Score: " + score;
}

function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }else if(blockLeft<20 && blockLeft>-20){
        updateScore();
    }
}

setInterval(checkDead, 10);