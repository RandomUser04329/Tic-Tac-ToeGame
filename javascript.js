
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
let PlayerChoices = new Array(size);

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
let ComputerChoices = new Array(size); 

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
            //GameRounds = Rounds;
            HidePage(RoundChoicePage);
        });
    });

    console.log(Player);

    return GameRounds;
}


//---------------------------------------------------------

//Current Round of the game (Always starts at one)

//Test value for now
GameRounds = 5;

//Indicators for the game
let i; 
let CurrRound = 1;
let PlayerTurn;

//Declares the choices of the user/Ai they make per round 
let PlayersChoice;
let ComputersChoice;

//The Gameboard buttons (used for the animations and to find which value is pressed)
let BoardButtons = document.querySelectorAll(".MainPage > .GamePage > .GamePage-GameBoardBox > button");


function Game() { 
    ShowPage(GameBoardPage);

    //Sets the Players setting choices to display
    //PlayerPFPSelector.src = Player.Picture;
    //PlayerNameSelector.textContent = Player.Name;
    //PlayerNameSelector.style.color = Player.Color;

    let Decider;
    ComputersChoice = 0;
    PlayersChoice = 0;

    PlayerTurn = true; 
    /*
    for (i = CurrRound; i < GameRounds; ++i) {
        Decider = Math.floor(Math.random() * (2 - 1) + 1); // A value from 1 - 2 deciding who goes first (Player is 2, Computer is 1)
        //ComputersChoice = Math.floor(Math.random() * (BoardButtons.length - 1) + 1);
        break;
    }

    if (Decider === 1) { 
        PlayerTurn = false;
    } else if (Decider === 2) { 
        PlayerTurn = true;
    }
    */
    console.log(Decider);
    console.log(PlayerTurn);

    if (PlayerTurn === true) { 
        PlayerMove();
    } else if (PlayerTurn === false) { 
        //Computers turn 
    }
}

function PlayerMove() {
    
    function ButtonAnimations() { 
        BoardButtons.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.classList.add("onHover");
                box.style.fontSize = "130px";
                box.style.transition = "ease-in 0.03s";
                box.style.cursor = "pointer";
            });
                    
            if (box.style.color === "black") { 
                box.addEventListener("mouseout", () => { 
                    box.classList.remove("onHover");
                    box.style.fontSize = "130px"; 
                })
            } else { 
                box.addEventListener("mouseout", () => { 
                    box.classList.remove("onHover");
                    box.style.fontSize = "0";
                })
            }

            box.addEventListener("click", () => {
                box.style.color = "black";//Player.Color;
                box.addEventListener("mouseout", () => {
                    box.classList.add("active");
                    box.style.fontSize = "130px";
                });
            });
        });
    }
    
    

    if (PlayersChoice === 0) { 
        BoardButtons.forEach(box => { 
            box.addEventListener("mouseover", ButtonAnimations); 
            box.addEventListener("mouseout", ButtonAnimations);
            box.addEventListener("click", ButtonAnimations);
            PlayersChoice = box.value;
        })
    } else if (PlayersChoice != 0) { 
        BoardButtons.forEach(box => { 
            box.removeEventListener("mouseover", ButtonAnimations, true);
            box.removeEventListener("mouseout", ButtonAnimations, true);
        })
        return Game(); 
    }
}


for (i = CurrRound; i < GameRounds; i++) { 
    Game();
    break;
}


