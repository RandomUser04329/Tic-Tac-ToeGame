
//The Main Page
const BodyPage = document.querySelector(".MainPage");


//Start Page + child elements
const TitleScreenPage = document.querySelector(".TitleScreenPage");

let StartGameButton = document.querySelector("#titlePage-button");




//User Creation Page + Form Selectors
const UserCreationPage = document.querySelector(".UserInfoChoicePage");


//User Form Selector 
const UserForm = document.querySelector("#UserForm-Form"); 


//User Creation Form selectors
const FormNameSection = document.querySelector("#Form-ProfileName");
let FormInputField = document.querySelector("#UserInfo-Name");
let FormName; 
let SubmitNameButton = document.querySelector("#SubmitNameButton");

const FormPictureSection = document.querySelector("#Form-ProfilePicture");
let FormApplePFP = document.querySelector("#UserInfo-ApplePFP");
let FormInvaderPFP = document.querySelector("#UserInfo-InvaderPFP");
let FormStarPFP = document.querySelector("#UserInfo-StarPFP");
let FormPFPSrc; 

let SubmitPFPButton = document.querySelector("#SubmitPFPButton");

const FormColorSection = document.querySelector("#Form-ProfileColor");
let FormColorInput = document.querySelector("#UserInfo-Color"); 
let FormColor;
let SubmitColorButton = document.querySelector("#UserForm-ColorButton");

//Round selection page + selectors
const RoundChoicePage = document.querySelector(".RoundChoicePage");
let CurrRound = 1;
let GameRounds = 0;
let RoundChoiceInput = document.querySelector("#RoundChoice-Input");
let RoundChoiceButton = document.querySelector("#RoundChoice-Button");

//Game Board Page + Selectors
const GameBoardPage = document.querySelector(".GamePage");
let RoundDisplay = document.querySelector("#GamePage-RoundDisplay");

//Player Display Selectors
let PlayerPFPSelector = document.querySelector("#UserProfile-UserPFP");
let PlayerNameSelector = document.querySelector("#UserProfile-UserName");
let UserRoundWonScore = document.querySelector("#UserProfile-UserScore");

//AI Display Selectors
let BotPFPSelector = document.querySelector("#ComputerProfile-ComputerPFP");
let BotNameSelector = document.querySelector("#ComputerProfile-ComputerName");
let BotRoundWonScore = document.querySelector("#ComputerProfile-ComputerScore");

//Declares the choices of the user/Ai they make for the boxes within a round
let PlayersChoice;
let BotsChoice;
let PlayersChoices = []; 
let BotsChoices = [];
let PChoicesArrIndex = 0;
let BChoicesArrIndex = 0;

let PTurns = 0;
let BTurns = 0;

let PWinRound = false; 
let BWinRound = false;
let PlayerWinsRound = 0; 
let BotWinsRound = 0; 

//The Gameboard buttons (used for the animations and to find which value is pressed)
let BoardButtons = document.querySelectorAll(".MainPage > .GamePage > .GamePage-GameBoardBox > button");

//Round Lose Page(If the user loses)
const UserLosesRoundPage = document.querySelector(".RoundLosePage");

//Round Won Page(If the user wins)
const UserWinsRoundPage = document.querySelector(".RoundWonPage");
let RoundWonButton = document.querySelector("#RoundWon-button");
let RoundLostButton = document.querySelector("#RoundLost-button");

//End of Game page (Game Summary)
const EndOfGamePage = document.querySelector(".GameSummaryPage");

let UserWinsGameSummaryPage = document.querySelector(".GameSummary-UserWins");
let BotWinsGameSummaryPage = document.querySelector(".GameSummary-UserLoses");
let TieGameSummaryPage = document.querySelector(".GameSummary-UserDraw");

let UserWinsButton = document.querySelector("#UserWins-button");
let BotWinsButton = document.querySelector("#UserLoses-button");
let TieGameButton = document.querySelector("#UserDraw-button");

//User wants to play again page
const PlayAgainPage = document.querySelector(".PlayAgainPage");

const PlayAgainUserOption = document.querySelector(".PlayAgain-UserOption");
let PlayAgainYesButton = document.querySelector("#PlayAgain-YesBTN");
let PlayAgainNoButton = document.querySelector("#PlayAgain-NoBTN");

//If User presses yes
const PlayAgainYesPage = document.querySelector(".PlayAgain-IfYes");
let KeepButton = document.querySelector("#IfYes-KeepBTN");
let ChangeButton = document.querySelector("#IfYes-ChangeBTN");

//If User presses no 
const PlayAgainNoPage = document.querySelector(".PlayAgain-IfNo")

//---------------------------------------------------------

//Factory Function + Object keys for User
let Player;
let PlayerName = undefined;
let PlayerPic = undefined;
let PlayerColor = undefined;

//Player Function
function PlayerFunc(name, pic, color) {
    Player = { 
        Name: name,
        Pic: pic,
        Color: color
    }    
    return Player;
}

//---------------------------------------------------------

let Bot;
let BotName;
let BotPic;
let BotColor;

//Computer Function
function BotFunc(name, pic, color) { 
    Bot = { 
        BotName: name,
        BotPic: pic,
        BotColor: color
    }

    return Bot;
}

//---------------------------------------------------------


function ShowPage(page) {  

    const AllPages = document.querySelectorAll(".MainPage > div");

    AllPages.forEach(div => 
        div.style.display = "none"
    );

    page.style.display = "grid";

}

function HidePage(page) { 

    if (page.style.display = "grid") {
        page.style.display = "none";
    } else { 
        page.style.display = "none";
    } 
}

function ShowSection(Section) { 
    const AllSections = document.querySelectorAll(".MainPage > .UserInfoChoicePage > #UserForm-Form > div");

    AllSections.forEach(div => div.style.display = "none");

    Section.style.display = "grid";

    return;
}


//---------------------------------------------------------

//A boolean to check whether the Players Info has all data or is missing a piece
let UserData = false;

function Start() { 
        
    ShowPage(TitleScreenPage); 

    StartGameButton.addEventListener("click", () => {
        MakeUser();
    });
}

//Random colors for the AI
let r;
let g;
let b;

function MakeUser() { 

    ShowPage(UserCreationPage); 
    
    if (PlayerName === undefined) { 
        ProfileName();
    } else if (PlayerPic === undefined) { 
        ProfilePicture();
    } else if (PlayerColor === undefined) { 
        ProfileColor(); 
    }

    if (PlayerName != undefined && PlayerPic != undefined && PlayerColor != undefined) { 
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        PlayerFunc(PlayerName, PlayerPic, PlayerColor);
        BotFunc("Bot", "../Tic-Tac-ToeGame/images/AI Profile.png", "rgb(" + r + ", " + g + ", " + b + ")");  
        StartGame();
    }

    function StartGame() { 
        return RoundSelection();
    }
}

function ProfileName() { 
    ShowSection(FormNameSection); 

    SubmitNameButton.addEventListener("click", () => {
        PlayerName = FormInputField.value; 
        MakeUser(); 
    });
}

function ProfilePicture() { 
    ShowSection(FormPictureSection);


    FormApplePFP.addEventListener("click", () => {
        FormPFPSrc = FormApplePFP.src;
    })

    FormInvaderPFP.addEventListener("click", () => {
        FormPFPSrc = FormInvaderPFP.src;
    })

    FormStarPFP.addEventListener("click", () => {
        FormPFPSrc = FormStarPFP.src;
    })

    SubmitPFPButton.addEventListener("click", () => {
        PlayerPic = FormPFPSrc;
        MakeUser();
    });
}

function ProfileColor() { 
    ShowSection(FormColorSection); 

    FormColorInput.addEventListener("input", () => { 
        FormColor = FormColorInput.value;
        /*
        SubmitColorButton.addEventListener("click", () => {
            PlayerColor = FormColor; 
            MakeUser(); 
        }); 
        */
    });
    SubmitColorButton.addEventListener("click", () => {
        PlayerColor = FormColor; 
        MakeUser(); 
    });
}

function RoundSelection() { 
    ShowPage(RoundChoicePage); 

    RoundChoiceButton.addEventListener("click", () => { 
        GameRounds = parseInt(RoundChoiceInput.value);
        console.log(GameRounds);
        Game();
    });
}

//---------------------------------------------------------


function Game() { 
    ShowPage(GameBoardPage);

    console.log("Game");
    
    //Sets the Players setting choices to display
    PlayerPFPSelector.src = Player.Pic;
    PlayerNameSelector.textContent = Player.Name;
    PlayerNameSelector.style.color = Player.Color;
    UserRoundWonScore.textContent = PlayerWinsRound;

    //Sets the Bots setting choices to display
    BotPFPSelector.src = Bot.BotPic;
    BotNameSelector.textContent = Bot.BotName;
    BotNameSelector.style.color = Bot.BotColor;
    BotRoundWonScore.textContent = BotWinsRound;

    function GameBoard() {
        if (BoardButtons[0].textContent === "X" && BoardButtons[1].textContent === "X" && BoardButtons[2].textContent === "X") { 
                PWinRound = true;
                RoundSummary(); 
        } else if (BoardButtons[3].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[5].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[6].textContent === "X" && BoardButtons[7].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[0].textContent === "X" && BoardButtons[3].textContent === "X" && BoardButtons[6].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[1].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[7].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[2].textContent === "X" && BoardButtons[5].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[0].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[2].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[6].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
        } 
            
        if (BoardButtons[0].textContent === "O" && BoardButtons[1].textContent === "O" && BoardButtons[2].textContent === "O") { 
                BWinRound = true;
                RoundSummary();
        } else if (BoardButtons[3].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[5].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[6].textContent === "O" && BoardButtons[7].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[0].textContent === "O" && BoardButtons[3].textContent === "O" && BoardButtons[6].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[1].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[7].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[2].textContent === "O" && BoardButtons[5].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[0].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        } else if (BoardButtons[2].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[6].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
        }

        TurnDecider(); 
    }

    function PlayerMove() {

        function MouseOver(box) { 
            box.target.classList.add("onHover");
            box.target.style.fontSize = "130px";
            box.target.style.transition = "ease-in 0.03s";
            box.target.style.cursor = "pointer";
            box.target.textContent = "X";
        }
            
        function MouseOut(box) {               
            box.target.classList.remove("onHover");
            box.target.style.fontSize = "0px"; 
            box.target.textContent = "";
        }
            
        function Click(box) {
            box.target.style.color = Player.Color;
            box.target.classList.add("active");
            box.target.style.fontSize = "130px";
            PlayersChoice = parseInt(box.target.value);
            PlayersChoices[PChoicesArrIndex] = PlayersChoice;
            PChoicesArrIndex++;
            box.disabled = true;
            BoardButtons.forEach(box => {
                box.removeEventListener("mouseover", MouseOver);
                box.removeEventListener("mouseout", MouseOut);
                box.removeEventListener("click", Click);
            });
            PTurns++;
            GameBoard(); 
        } 


        BoardButtons.forEach(box => {
            if (box.textContent != "O") {
                if (box.textContent != "X") {
                    if (box.disabled != true) {
                        box.addEventListener("mouseover", MouseOver);
                        box.addEventListener("mouseout", MouseOut);
                        box.addEventListener("click", Click);
                        box.disabled = false;
                    }
                }
            }
        });
    }

    function ComputerMove() {
        let num = Math.floor(Math.random() * 9);

        for (let i = 0; i < BoardButtons.length; ++i) { 
            if (num === PlayersChoices[i] || num === BotsChoices[i]) { 
                ComputerMove(); 
                break;
            } else { 
                if (parseInt(BoardButtons[i].value) === num) {
                    BotsChoice = parseInt(BoardButtons[i].value);
                    BotsChoices[BChoicesArrIndex] = BotsChoice;
                    BChoicesArrIndex++;
                    BoardButtons[i].textContent = "O";
                    BoardButtons[i].style.color = Bot.BotColor;
                    BoardButtons[i].style.fontSize = "130px";
                    BoardButtons[i].disabled = true;
                    BTurns++;
                    GameBoard(); 
                    break;
                }
            }
        }
        

    }
    
    function TurnDecider() { 

        console.log("Here");

        if (PWinRound === false && BWinRound === false) { 
            if ((BTurns + PTurns) <= BoardButtons.length) {
                if (PTurns === 0 && BTurns === 0) { 
                    let randomizer = Math.floor(Math.random() * 2 + 1);
                    if (randomizer === 1) { 
                        setTimeout(() => { 
                            RoundDisplay.textContent = "Your Turn.";
                            setTimeout(() => {
                                PlayerMove();
                            }, 1500)
                        }, 1000);
                    } else if (randomizer === 2) { 
                        setTimeout(() => { 
                            RoundDisplay.textContent = "Bots Turn.";
                            setTimeout(() => {
                                ComputerMove();
                            }, 1500)
                        }, 1000);
                    }
                } else {
                    if (PTurns > BTurns) {
                        setTimeout(() => { 
                            RoundDisplay.textContent = "Bots Turn.";
                            setTimeout(() => {
                                ComputerMove();
                            }, 1500)
                        }, 1000);
                    } else if (PTurns < BTurns) {
                        setTimeout(() => { 
                            RoundDisplay.textContent = "Your Turn.";
                            setTimeout(() => {
                                PlayerMove();
                            }, 1500)
                        }, 1000);
                    } else if (BTurns === PTurns) { 
                        if (RoundDisplay.textContent === "Bots Turn.") {
                            setTimeout(() => { 
                                RoundDisplay.textContent = "Your Turn.";
                                setTimeout(() => {
                                    PlayerMove();
                                }, 1500)
                            }, 1000);
                        } else if (RoundDisplay.textContent === "Your Turn.") {
                            setTimeout(() => { 
                                RoundDisplay.textContent = "Bots Turn.";
                                setTimeout(() => {
                                    ComputerMove();
                                }, 1500)
                            }, 1000);
                        }
                    } 
                }
            } else if ((BTurns + PTurns) >= BoardButtons.length) { 
                setTimeout(() => {
                    RoundDisplay.textContent = "Draw.";
                    setTimeout(() =>{ 
                        RoundSummary(); 
                    }, 1500);
                }, 1000);
            }
        } else { 
            RoundSummary(); 
        }
    } 
    //FORTOMORROW: Change how the turndecider function works. Needs a rework.
    function Roundsleft() { 
        console.log("Rounds");
        if (CurrRound <= GameRounds) { 
            for (let i = CurrRound; i <= GameRounds; ++i) { 
                RoundDisplay.textContent = "Round " + i;
                TurnDecider();
                break;
            }
        } else if (CurrRound > GameRounds) { 
            GameSummary(); 
        }
        
    }
    if (PWinRound === false && BWinRound === false) { 
       Roundsleft(); 
    } 
       
}
    
function GameSummary() {

    ShowPage(EndOfGamePage);
    
    if (PlayerWinsRound > BotWinsRound) { 
        UserWinsGameSummaryPage.style.display = "grid";
    } else if (PlayerWinsRound < BotWinsRound) { 
        BotWinsGameSummaryPage.style.display = "grid";
    } else if (PlayerWinsRound === BotWinsRound) { 
        TieGameSummaryPage.style.display = "grid";
    }

    if (UserWinsGameSummaryPage.style.display === "grid") { 
        UserWinsButton.addEventListener("click", () => { 
            EndOfGame();
        }); 
    } else if (BotWinsGameSummaryPage.style.display === "grid") {
        BotWinsButton.addEventListener("click", () => {
            EndOfGame(); 
        });
    } else if (TieGameSummaryPage.style.display === "grid") { 
        TieGameButton.addEventListener("click", () => {
            EndOfGame(); 
        })
    }
    
}

function RoundSummary() { 
    if (PWinRound === true) {
        setTimeout(() => {
            PlayerWinsRound += 1;
            ShowPage(UserWinsRoundPage);
        }, 1000);
    } else if (BWinRound === true) {
        setTimeout(() => {
            BotWinsRound += 1;
            ShowPage(UserLosesRoundPage);
        }, 1000);
    }

    PWinRound = false;
    BWinRound = false; 
    CurrRound += 1;

    PlayersChoices = []; 
    BotsChoices = []; 
    BChoicesArrIndex = 0;
        PChoicesArrIndex = 0;
        PlayersChoice = 0;
        BotsChoice = 0; 
        PTurns = 0;
        BTurns = 0; 

        BoardButtons.forEach(box => { 
            box.style.color = "rgb(0, 0, 0, 0.05)";
            box.disabled = false;
            box.textContent = "";
        }); 


    RoundWonButton.addEventListener("click", () => { 
        Game(); 
    });

    RoundLostButton.addEventListener("click", () => { 
        Game(); 
    });
}

function EndOfGame() { 
    ShowPage(PlayAgainPage); 

    PlayersChoice = 0;
    BotsChoice = 0;
    PlayersChoices = []; 
    BotsChoices = [];
    PChoicesArrIndex = 0;
    BChoicesArrIndex = 0;

    PTurns = 0;
    BTurns = 0;

    PWinRound = false; 
    BWinRound = false;
    PlayerWinsRound = 0; 
    BotWinsRound = 0;

    PlayAgainUserOption.style.display = "grid"; 

    BoardButtons.forEach(box => { 
        box.textContent = ""; 
        box.style.color = "rgb(0, 0, 0, 0.5)";
    });

    PlayAgainYesButton.addEventListener("click", () => { 
        PlayAgainUserOption.style.display = "none";  
        Restart();
    });
    PlayAgainNoButton.addEventListener("click", () => { 
        PlayAgainUserOption.style.display = "none";
        Quit();
    });
}

function Restart() { 
    PlayAgainYesPage.style.display = "grid";

    KeepButton.addEventListener("click", () => {
        PlayAgainYesPage.style.display = "none";
        CurrRound = 0; 
        GameRounds = 0; 

        RoundSelection();
    });

    ChangeButton.addEventListener("click", () => { 
        PlayAgainYesPage.style.display = "none";
        PlayerName = undefined;
        PlayerColor = undefined;
        PlayerPic = undefined;
        UserData = false;

        CurrRound = 0;
        GameRounds = 0;

        MakeUser(); 
    });
}

function Quit() { 
   PlayAgainNoPage.style.display = "grid";
}

Start(); 


/*------------For Debugging---------------*/


//RoundSelection();
