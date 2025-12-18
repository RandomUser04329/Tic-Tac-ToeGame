
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

let RoundChoiceInput = document.querySelector("#RoundChoice-Input");
let RoundChoiceButton = document.querySelector("#RoundChoice-Button");

//Game Board Page
const GameBoardPage = document.querySelector(".GamePage");

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
function PlayerFunc(value) {

    let checker; 

    for (let i = 0; i < value.length; ++i) { 
        checker = value[i];
    }

    if (checker != undefined) { 
        if (isNaN(checker)) { 
            if (!checker.includes(".png")) { 
                PlayerName = checker;
            } else if (checker.includes("#")) { 
                PlayerColor = checker;
            } else { 
                PlayerPic = checker;
            }
        }
    }

    
    Player = { 
        Name: PlayerName,
        level: 0,
        Picture: PlayerPic,
        Color: PlayerColor
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


/*
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
*/

//A boolean to check whether the Players Info has all data or is missing a piece
let UserData = false;

TitleScreenPage.style.display = "grid";
    

StartGameButton.addEventListener("click", () => {
    MakeUser();
});



function MakeUser() { 
    TitleScreenPage.style.display = "none";
    UserCreationPage.style.display = "grid";

        if (PlayerName === undefined) { 
            ProfileName();
        } 

    
}

    
function ProfileName() { 
    //ShowSection(FormNameSection);
    FormNameSection.style.display = "grid";

    SubmitNameButton.addEventListener("click", () => {

        FormName = FormInputField.textContent;
        PlayerFunc(FormName); 

        ProfilePicture();
    });
}

function ProfilePicture() { 
    FormPictureSection.style.display = "grid";
    FormNameSection.style.display = "none";
    //ShowSection(FormPictureSection);

    SubmitPFPButton.addEventListener("click", () => {

    });

}



console.log(Player);
















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
