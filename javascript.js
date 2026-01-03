
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
let Rounds = 0;
let GameRounds;
let RoundChoiceInput = document.querySelector("#RoundChoice-Input");
let RoundChoiceButton = document.querySelector("#RoundChoice-Button");

//Game Board Page + Selectors
const GameBoardPage = document.querySelector(".GamePage");
let RoundDisplay = document.querySelector("#GamePage-RoundDisplay");

//Player Display Selectors
let PlayerPFPSelector = document.querySelector("#UserProfile-UserPFP");
let PlayerNameSelector = document.querySelector("#UserProfile-UserName");

//AI Display Selectors
let ComputerPFPSelector = document.querySelector("#ComputerProfile-ComputerPFP");


//Round Lose Page(If the user loses)
const UserLosesRoundPage = document.querySelector(".RoundLosePage");

//Round Won Page(If the user wins)
const UserWinsRoundPage = document.querySelector(".RoundWonPage");

const NextRoundButton = document.querySelector("#NextRound-button");

//End of Game page (Game Summary)
const SummaryOfGamePage = document.querySelector(".GameSummaryPage");

//User wants to play again page
const PlayAgainPage = document.querySelector(".PlayAgainPage");





//---------------------------------------------------------





//Max amount of choices either players can have for the Tic tac game per round
let size = 4;

//Factory Function + Object keys for User
let Player;
let PlayerName = undefined;
let PlayerLevel = undefined;
let PlayerPic = undefined;
let PlayerColor = undefined;
let PlayerMarks = new Array(size);

//Player Function
function PlayerFunc(name, level, picture, color) {
    Player = { 
        Name: name,
        level: level,
        Picture: picture,
        Color: color
    }    
    return Player;
}



//---------------------------------------------------------



let Computer;
let ComputerName;
let ComputerLevel;
let ComputerPic;
let ComputerColor;
let ComputerMarks = new Array(size); 

//Computer Function
function ComputerFunc(name, level, pic, color) { 
    return { 
        ComputerName: name,
        ComputerLevel: level,
        ComputerPic: pic,
        ComputerColor: color,
    }
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
        PlayerFunc(PlayerName, 0, PlayerPic, PlayerColor);
        RoundSelection();   
    }
}

    
function ProfileName() { 
    ShowSection(FormNameSection); 

    SubmitNameButton.addEventListener("click", () => {
        FormName = FormInputField.value;
        PlayerName = FormName; 
        return MakeUser(); 
    });
}

function ProfilePicture() { 
    ShowSection(FormPictureSection);


    FormApplePFP.addEventListener("click", () => {
        FormPFPSrc = FormApplePFP.src;
        SubmitPFPButton.addEventListener("click", () => {
            PlayerPic = FormPFPSrc;
            return MakeUser();
        });
    })

    FormInvaderPFP.addEventListener("click", () => {
        FormPFPSrc = FormInvaderPFP.src;
        SubmitPFPButton.addEventListener("click", () => {
            PlayerPic = FormPFPSrc; 
            return MakeUser(); 
        });
    })

    FormStarPFP.addEventListener("click", () => {
        FormPFPSrc = FormStarPFP.src;
        SubmitPFPButton.addEventListener("click", () => {
            PlayerPic = FormPFPSrc;
            return MakeUser(); 
        });
    })
}


function ProfileColor() { 
    ShowSection(FormColorSection); 

    FormColorInput.addEventListener("input", () => { 
        FormColor = FormColorInput.value;
        SubmitColorButton.addEventListener("click", () => {
            PlayerColor = FormColor; 
            return MakeUser(); 
        }); 
    });
}



function RoundSelection() { 
    ShowPage(RoundChoicePage); 
    
    RoundChoiceInput.addEventListener("change", () => {
        Rounds = RoundChoiceInput.value;
        
        RoundChoiceButton.addEventListener("click", () => { 
            GameRounds = Rounds;
            Game();
        });
    });

    return GameRounds;
}


//---------------------------------------------------------


//Test value for now
GameRounds = 3;

//Indicators for the game
let CurrRound = 1;

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

console.log(BoardButtons);

function Game() { 
    ShowPage(GameBoardPage);

    //Sets the Players setting choices to display
    //PlayerPFPSelector.src = Player.Picture;
    //PlayerNameSelector.textContent = Player.Name;
    //PlayerNameSelector.style.color = Player.Color;

    if (PWinRound === false && BWinRound === false) { 
        Roundsleft(); 
    }

    function GameBoard() {

        console.log(PlayersChoices);
        console.log(BotsChoices);

        if (BoardButtons[0].textContent === "X" && BoardButtons[1].textContent === "X" && BoardButtons[2].textContent === "X") { 
                PWinRound = true;
                RoundSummary(); 
                //break;
        } else if (BoardButtons[3].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[5].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[6].textContent === "X" && BoardButtons[7].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[0].textContent === "X" && BoardButtons[3].textContent === "X" && BoardButtons[6].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[1].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[7].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[2].textContent === "X" && BoardButtons[5].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[0].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[8].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[2].textContent === "X" && BoardButtons[4].textContent === "X" && BoardButtons[6].textContent === "X") { 
                PWinRound = true; 
                RoundSummary(); 
                //break;
        } 
            
        if (BoardButtons[0].textContent === "O" && BoardButtons[1].textContent === "O" && BoardButtons[2].textContent === "O") { 
                BWinRound = true;
                RoundSummary(); 
                //break;
        } else if (BoardButtons[3].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[5].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[6].textContent === "O" && BoardButtons[7].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[0].textContent === "O" && BoardButtons[3].textContent === "O" && BoardButtons[6].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[1].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[7].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[2].textContent === "O" && BoardButtons[5].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[0].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[8].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
        } else if (BoardButtons[2].textContent === "O" && BoardButtons[4].textContent === "O" && BoardButtons[6].textContent === "O") { 
                BWinRound = true; 
                RoundSummary(); 
                //break;
            //}
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
            box.target.style.color = "black";//Player.Color;
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

        let num = Math.floor(Math.random() * 9 + 1 - 1);

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
                    BoardButtons[i].style.color = "red";
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

    function Roundsleft() { 
        for (let i = CurrRound; i < GameRounds; i++) { 
            RoundDisplay.textContent = "Round " + i; 
            TurnDecider();
            break;
        }
    }

}

function RoundSummary() { 
    if (PWinRound === true) { 
        setTimeout(() => {
            ShowPage(UserWinsRoundPage);
            PlayerWinsRound++;
        }, 1000);
    } else if (BWinRound === true) { 
        setTimeout(() => {
            ShowPage(UserLosesRoundPage);
            BotWinsRound++;
        }, 1000);
    }


    NextRoundButton.addEventListener("click", () => { 
        PWinRound = false;
        BWinRound = false; 
        CurrRound++; 

        BoardButtons = document.querySelectorAll(".MainPage > .GamePage > .GamePage-GameBoardBox > button");

        PlayersChoices = []; 
        BotsChoices = []; 
        BChoicesArrIndex = 0;
        PChoicesArrIndex = 0;
        PlayersChoice = 0;
        BotsChoice = 0; 

        BoardButtons.forEach(box => { 
            box.textContent = "";
        }); 

        Game(); 

    });
}


Game();


