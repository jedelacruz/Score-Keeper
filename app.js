let player1Score = document.querySelector("#player1-Score")
let player2Score = document.querySelector("#player2-Score")
let upToScore = document.querySelector("#playToBtn")

let player1ScoreBoard = 0
let player2ScoreBoard = 0
let winningScore = 5
let gameOver = false

const player1Btn = document.querySelector("#player1-Add")
const player2Btn = document.querySelector("#player2-Add")
const resetBtn = document.querySelector("#reset-Btn")

upToScore.addEventListener("change", function(){
    winningScore = parseInt(this.value);
})

player1Btn.addEventListener("click", function(){
    if(!gameOver) {
        player1ScoreBoard += 1
        if(player1ScoreBoard === winningScore){
            gameOver = true
            player1Score.style.color = "#02CAA9";
            player2Score.style.color = "crimson";
            player1Btn.style.opacity = "0.5";
            player2Btn.style.opacity = "0.5";
        }
        player1Score.textContent = player1ScoreBoard
    }
    
})

player2Btn.addEventListener("click", function(){
    if(!gameOver) {
        player2ScoreBoard += 1
        if(player2ScoreBoard === winningScore){
            gameOver = true
            player2Score.style.color = "#02CAA9";
            player1Score.style.color = "crimson";
            player1Btn.style.opacity = "0.5";
            player2Btn.style.opacity = "0.5";
        }
        player2Score.textContent = player2ScoreBoard
    }
})

resetBtn.addEventListener("click", function(){
    player1ScoreBoard = 0;
    player2ScoreBoard = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.style.color = "";
    player2Score.style.color = "";
    player1Btn.style.opacity = "";
    player2Btn.style.opacity = "";
    gameOver = false;
})
