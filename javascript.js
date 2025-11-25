//the parent function that starts the WHOLE game
function startGame(name) { 
    let playerName;
    let playerLevel;
    let playerColor;
    let rounds; 

    let Player = {
        playerName: name,
        playerLevel: 0,
        playerColor,
        rounds: parseInt(prompt("Enter the amount of rounds you want to play: "))
    };

    let computerAI = {
        compName: "AI",
        compLevel: 0,
        compColor: "Random"
    }

    let userInfo = { 
        Player, 
        computerAI
    };


    if (userInfo.Player.rounds != 0 && userInfo.Player.playerName != "") {
        return gameFunction(userInfo); 
    } else { 
        if (userInfo.Player.playerName === "") {
            while (userInfo.Player.playerName === "") {
                userInfo.Player.playerName = prompt("Please enter a name: ");
             if (userInfo.Player.playerName != "") {
                return gameFunction(userInfo); 
             }
            }
        }
        if (userInfo.Player.rounds === 0) {
            while (userInfo.Player.rounds === 0) {
                userInfo.Player.rounds = parseInt(prompt("Please enter the amount of rounds you want to play: "));
             if (userInfo.Player.rounds != 0) {
                return gameFunction(userInfo); 
             }
            }
        }
    }




    function gameFunction(userInfo) { 
        let gameRounds = userInfo.Player.rounds; 

        let playerChoices = [gameRounds]; 
        let computerChoices = [gameRounds]; 
        let gameEnd = 0;

        while (gameEnd <= gameRounds) {
            let playerChoice = prompt(parseInt("Enter a number 1-6: "))
        }

    }



}



