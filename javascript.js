
//The Main Page
const BodyPage = document.querySelector(".MainPage");


//Start Page + child elements
const TitleScreenPage = document.querySelector(".TitleScreenPage");

let StartGameButton = document.querySelector("#titlePage-button");




//User Creation Page + Form Selectors
const UserCreationPage = document.querySelector(".UserInfoChoicePage");

//User Creation Form selectors
let FormNameSection = document.querySelector("#UserForm-FormName");
let FormInputField = document.querySelector("#UserInfo-Name");
let FormInput; 
let SubmitNameButton = document.querySelector("#SubmitNameButton");

let FormPFPSection = document.querySelector("#UserForm-FormPFP");
let FormApplePFP = document.querySelector("#UserInfo-ApplePFP");
let FormInvaderPFP = document.querySelector("#UserInfo-InvaderPFP");
let FormStarPFP = document.querySelector("#UserInfo-StarPFP");
let FormPFPSrc; 

let SubmitPFPButton = document.querySelector("#SubmitPFPButton");

let FormColorSection = document.querySelector("#UserForm-FormColor");
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














//Global object + Global keys
let User;
let PlayerName;
let PlayerLevel;
let PlayerPic;
let PlayerColor;

//Player Function
function PlayerFunc(value) { 
    PlayerName = value;
    User = { 
        PlayerName,
        PlayerLevel,
        PlayerPic,
        PlayerColor
    }

    return User;
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

    const AllPages = document.querySelector(".MainPage > div"); 

    AllPages.style.display = "none";

    if (page) { 
        page.style.display = "grid";
    } 

    return;
}

function ShowSection(Section) { 
    const AllSections = document.querySelector(".MainPage > form");

    AllSections.style.display = "none";

    if (Section) { 
        Section.style.display = "grid"; 
    }

    return;

}


function TicTacToe() { 

    ShowPage(TitleScreenPage);

    StartGameButton.addEventListener("click", () => {
        MakeUser(); 
    });

    function MakeUser() { 
        ShowPage(UserCreationPage); 

        if (FormInput === undefined || FormPFPSrc === undefined || FormColor === undefined) { 
            if (FormInput === undefined) { 
                ProfileName();
            } else if (FormPFPSrc === undefined) { 
                ProfilePic();
            } else if (FormColor === undefined) { 
                ProfileColor(); 
            }
        }


        function ProfileName() { 
            ShowSection(FormNameSection);
        }

        function ProfilePic() { 
            ShowSection(FormPFPSection);
        }

        function ProfileColor() { 
            ShowSection(FormColorSection);
        }

    }

    function Game() { 

    }

    function RoundResults() { 

    }

}

TicTacToe(); 





























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
