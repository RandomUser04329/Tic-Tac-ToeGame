
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

//Game Board Page
const GameBoardPage = document.querySelector(".GamePage");
let RoundDisplay = document.querySelector("#GamePage-RoundDisplay");

//Round Lose Page(If the user loses)
const UserLosesRoundPage = document.querySelector(".RoundLosePage");

//Round Won Page(If the user wins)
const UserWinsRoundPage = document.querySelector(".RoundWonPage");

//End of Game page (Game Summary)
const SummaryOfGamePage = document.querySelector(".GameSummaryPage");

//User wants to play again page
const PlayAgainPage = document.querySelector(".PlayAgainPage");














//Factory Function + Object keys for User
let Player;
let PlayerName = undefined;
let PlayerLevel = undefined;
let PlayerPic = undefined;
let PlayerColor = undefined;

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

let Computer;
let ComputerName;
let ComputerLevel;
let ComputerPic;
let ComputerColor;


//Computer Function
function ComputerFunc(name, level, pic, color) { 
    return { 
        ComputerName: name,
        ComputerLevel: level,
        ComputerPic: pic,
        ComputerColor: color,
    }
}

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


    console.log(Player);

}


function Game() { 
    ShowPage(GameBoardPage); 


    //let BoardButtons = document.querySelectorAll(".MainPage > .GamePage > .GamePage-GameBoardBox > button"); 

    //Displays the current round the user is on
    let currentRound = 1;

    /*
    for (let i = 1; i < GameRounds; ++i) { 
        RoundDisplay.textContent = "Rounds " + currentRound; 
    }
    */

    while (currentRound < GameRounds) {
        BoardButtons.addEventListener("mouseover", () => {
            BoardButtons.textContent = "X"; 
        })
    }
    



    
}

let BoardButtons = document.querySelectorAll(".MainPage > .GamePage > .GamePage-GameBoardBox > button")

let Square1 = document.querySelector("#GameBoard-BoardButton1");
let Square2 = document.querySelector("#GameBoard-BoardButton2");

//FORLATER: Either make all the buttons into an array,
//then if the user selects one, then the user "owns" that index and lets the 
//computer Ai choose any random cube using Math.Random or something else. 

//Then, match the indexs (Box 1, Box 2 and Box 3 are a match) or
// (Box 1, Box 5, Box 9 are a match) and either the user or the AI wins the round.
/*


/* USE THIS */
BoardButtons.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.textContent = "X";
        box.classList.add("onHover");
    });
});

BoardButtons.forEach(box => {
    box.addEventListener("mouseleave", () => {
        box.textContent = "";
        box.classList.remove("onHover");
    });
});


BoardButtons.forEach(box => { 
    box.addEventListener("click", () => { 
        box.classList.toggle("playerClicked");
    })
});



//Start();



















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
