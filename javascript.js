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
             } else  {
                continue;
             }
            }
        }
        if (userInfo.Player.rounds === 0) {
            while (userInfo.Player.rounds === 0) {
                userInfo.Player.rounds = parseInt(prompt("Please enter the amount of rounds you want to play: "));
             if (userInfo.Player.rounds != 0) {
                return gameFunction(userInfo); 
             } else  {
                continue;
             }
            }
        }
    }




    function gameFunction(userInfo) { 
        let gameRounds = userInfo.Player.rounds; 

        let playerChoices = []; 
        let computerChoices = []; 
        let playerAns = 0; 
        let computerAns = 0; 
        let gameEnd = 0;



        while (gameEnd <= gameRounds) {
            playerAns = parseInt(prompt("Enter a number 1-6: "));
            computerAns = Math.floor(Math.random() * 6); 

            if (playerAns === 0) { 
                alert("Needs to be a number from 1 to 6.");
                continue; 
            } else if (playerAns >= 1 && playerAns <= 6) { 
                gameEnd++;
                playerChoices[gameEnd] = playerAns;
                computerChoices[gameEnd] = computerAns;
                console.log(playerAns);
                console.log(computerAns);
                console.log(computerChoices);
                console.log(playerChoices);
                continue;
            }
        }

    }



}



