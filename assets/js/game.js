function generateRandomNumberBetween(x,y){
    //generates random number between x and y, provided x < y

    var random = Math.floor(Math.random() * y) + x; 
    return random;
}

var wins = 0;
var losses = 0;

//game object
var game = {
    randomNumber: 0,
    blueGem: 0,
    greenGem: 0,
    pinkGem: 0,
    yellowGem: 0,
    userTotal: 0
};

function resetGame(){
    game.randomNumber = generateRandomNumberBetween(19,120);
    $("#randomNumber").text(game.randomNumber);
    game.blueGem = generateRandomNumberBetween(1,12);
    game.greenGem = generateRandomNumberBetween(1,12);
    game.pinkGem = generateRandomNumberBetween(1,12);
    game.yellowGem = generateRandomNumberBetween(1,12);

    console.log("blue: " + game.blueGem);
    console.log("green: " + game.greenGem);
    console.log("pink " + game.pinkGem);
    console.log("yellow " + game.yellowGem);

    game.userTotal = 0;
}

function checkIfWon(){
    if(game.userTotal == game.randomNumber){
        wins++;
        $("#numberWins").text(wins);
        alert("Congratulations! You Won!");
        resetGame();
        return true;
    }
    else if(game.userTotal > game.randomNumber){
        losses++;
        $("#numberLosses").text(losses);
        alert("you lost!");
        resetGame();
        return false;
    }
    else{
        return false;
    }
}

function handleOnClick(){
    $("#blue").on("click",function(){
        game.userTotal += game.blueGem;
        $("#finalTotal").text(game.userTotal);
        checkIfWon();
    });

    $("#yellow").on("click",function(){
        game.userTotal += game.yellowGem;
        $("#finalTotal").text(game.userTotal);
        checkIfWon();
    });

    $("#pink").on("click",function(){
        game.userTotal += game.pinkGem;
        $("#finalTotal").text(game.userTotal);
        checkIfWon();
    });

    $("#green").on("click",function(){
        game.userTotal += game.greenGem;
        $("#finalTotal").text(game.userTotal);
        checkIfWon();
    })

}

$(document).ready(function () {
    resetGame();
    handleOnClick();
});