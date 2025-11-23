//the parent function that starts the WHOLE game
function startGame(name) { 
    let playerName = name;
    let playerLevel = 0; 
    let playerColor;

    let Player = {
        playerName,
        playerLevel,
        playerColor,
    };

    let computerAI = {
        compName: "AI",
        compLevel: 0,
        compColor: "Random"
    }

}

//Choose your rounds (child function)
function chooseRounds(rounds, player, computer) {
    let Rounds = rounds;

    return ticTacToeGame(player, computer, Rounds);
}



//The Game (child function)
function ticTacToeGame(Player, Computer, Rounds) {
    console.log(Player);
    console.log(Computer);


 }
