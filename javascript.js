
//The Main Page
const BodyPage = document.querySelector(".MainPage");


//Start Page + child elements
const TitleScreenPage = document.querySelector(".TitleScreenPage");

let StartGameButton = document.querySelector("#titlePage-button");




//User Creation Page + Form Selectors
const UserCreationPage = document.querySelector(".UserInfoChoicePage");

//User Creation Form selectors
let FormNamePage = document.querySelector("#UserForm-FormName");
let FormInputField = document.querySelector("#UserInfo-Name");
let FormInput = FormInputField.textContent;
let SubmitNameButton = document.querySelector("#SubmitNameButton");

let FormPFPPage = document.querySelector("#UserForm-FormPFP");
let SubmitPFPButton = document.querySelector("#SubmitPFPButton");

let FormColorPage = document.querySelector("#UserForm-FormColor");
let SubmitColorButton = document.querySelector("#UserForm-ColorButton");



//Round selection page + selectors
const roundChoicePage = document.querySelector(".RoundChoicePage");

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





//Global Value to change pages
let page;

//function that changes pages 
function Pages(page) {
    while (page != "") { 
        if (page === TitleScreenPage) { 
            StartGame();
            break;
        } else if (page === UserCreationPage) { 
            MakePlayer();
            break;
        } else if (page === GameBoardPage) { 
            PlayGame();
            break;
        }
    }

}

//Start Game Page
function StartGame() { 
    TitleScreenPage.style.display = "grid";

    console.log(User);

    StartGameButton.addEventListener("click", () => { 
        TitleScreenPage.style.display = "none";
        page = UserCreationPage;
        Pages(page);
    });
}



//User Creation Page
function MakePlayer() { 
    UserCreationPage.style.display = "grid"; 

    if (User === undefined) { 
        PlayerFunc();
    }

    while (true) { 
        if (User.PlayerName === undefined) { 
            MakeName(); 
            break;
        }
        
    }
    


    function MakeName() { 
        FormNamePage.style.display = "grid";

        SubmitNameButton.addEventListener("click", () => { 
            PlayerFunc(FormInput);
            return page = UserCreationPage;
        }); 
    }
}

















//Start 
while (User === undefined) {
    StartGame();
    break;
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
