//the parent function that starts the WHOLE game
function startGame(name) { 
    let playerName;
    let playerLevel;
    let playerColor;
    let playerAnswers;
    let computerAnswers;
    let rounds; 

    let Player = {
        playerName: name,
        playerLevel: 0,
        playerColor,
        playerAnswers,
        rounds: parseInt(prompt("Enter the amount of rounds you want to play: "))
    };

    let computerAI = {
        compName: "AI",
        compLevel: 0,
        computerAnswers, 
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
                userInfo.Player.playerName = prompt("Enter a name:");
             if (userInfo.Player.playerName != "") {
                return gameFunction(userInfo); 
             } else  {
                continue;
             }
            }
        }
        if (userInfo.Player.rounds === 0) {
            while (userInfo.Player.rounds === 0) {
                userInfo.Player.rounds = parseInt(prompt("Enter the amount of rounds you wish to play:"));
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



        while (gameEnd < gameRounds) {
            playerAns = parseInt(prompt("Enter a number 1-6: "));
            computerAns = Math.floor(Math.random() * 6); 

            if (playerAns === 0) { 
                alert("Needs to be a number from 1 to 6.");
                continue; 
            } else if (playerAns >= 1 && playerAns <= 6) { 
                gameEnd++;
                playerChoices[gameEnd] = playerAns;
                computerChoices[gameEnd] = computerAns;
                continue;
            }

        } if (gameEnd >= gameRounds) { 
            userInfo.Player.playerAnswers = playerChoices; 
            userInfo.computerAI.computerAnswers = computerChoices; 

            return gameSummary(userInfo); 
        }

    }


    function gameSummary(userInfo) {

        let i; 
        let numMatch = 0; 
        let gameRound = 0;

        let compWin = 0; 
        let userWin = 0;

        let usrAnswers = userInfo.Player.playerAnswers.filter(i =>
            i !== undefined ); 
        
        let compAnswers = userInfo.computerAI.computerAnswers.filter(i => 
            i !== undefined );
        
        
        for (let i of usrAnswers) {
            gameRound++; 
            if (gameRound < userInfo.Player.rounds) {
                if (usrAnswers[i] !== compAnswers[i]) { 
                    console.log("No Match");
                    compWin++;
                    continue;
                } else { 
                    numMatch++; 
                    userWin++;
                    console.log(numMatch + " Match");
                    continue;
                }

            } else if (gameRound === userInfo.Player.rounds) { 
                return gameReset(userInfo, compWin, userWin);
            }     
        }

    }



    function gameReset(userInfo, compScore, userScore) { 

        let decision; 

        let userName = userInfo.Player.playerName;
        let userLevel = userInfo.Player.playerLevel;
        let userColor = userInfo.Player.playerColor;
        let userChoices = userInfo.Player.playerAnswers;
        let userRounds = userInfo.Player.rounds;

        if (compScore > userScore) { 
            alert("You Lose.");
        } else if (userScore > compScore) {
            userInfo.Player.playerLevel += 0.25; 
            alert("You Win!");
        } else if (userScore === compScore) {
            alert("Draw! Its a tie.");
        }

        while (true) { 

            decision = prompt("Retry? Type Y or N.");

            if (decision === "Y") { 
                userChoices = []; 
                userRounds = 0; 
                userInfo.computerAI.computerAnswers = [];
                return gameFunction(userInfo);
            } else if (decision === "N") {
                userName = "";
                userLevel = 0;
                userColor = "";
                userChoices = [];
                userRounds = 0;
                console.log("Thanks For Playing.");
                break;
            } else { 
                alert("please enter either Y or N (not y/n or any other character.");
                continue;
            }

        }

    }


}

/*
const objK = { 
    key1: [1, 2, 3, 4],
    key2: [5, 6, 7, 8],
    key3: { 
        key1: [2, 4, 6], 
        key2: [3, 6, 9]
    }
}


for (let i of objK.key3.key2) {
    console.log(i);
}
*/
