
//The Main Page
const BodyPage = document.querySelector(".MainPage");


//Start Page + child elements
const TitleScreenPage = document.querySelector(".TitleScreenPage");

let StartGameButton = document.querySelector("#titlePage-button");




//User Creation Page + Form Selectors
const UserCreationPage = document.querySelector(".UserInfoChoicePage");

//User Creation Form selectors
const FormNameSection = document.querySelector("#UserForm-FormName");
let FormInputField = document.querySelector("#UserInfo-Name");
let FormName; 
let SubmitNameButton = document.querySelector("#SubmitNameButton");

const FormPFPSection = document.querySelector("#UserForm-FormPFP");
let FormApplePFP = document.querySelector("#UserInfo-ApplePFP");
let FormInvaderPFP = document.querySelector("#UserInfo-InvaderPFP");
let FormStarPFP = document.querySelector("#UserInfo-StarPFP");
let FormPFPSrc; 

let SubmitPFPButton = document.querySelector("#SubmitPFPButton");

const FormColorSection = document.querySelector("#UserForm-FormColor");
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
function PlayerFunc() { 
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
    const AllSections = document.querySelector(".MainPage > .UserInfoChoicePage > form");

    AllSections.style.display = "none";

    if (Section) { 
        Section.style.display = "grid"; 
    }

    return;

}

TicTacToe(); 

function TicTacToe() { 

    StartGameButton.addEventListener("click", () => {
        MakeUser(); 
    });

    function MakeUser() { 
        ShowPage(UserCreationPage); 

        PlayerFunc(); 

        //A boolean to check whether the Players Info has all data or is missing a piece
        let UserData = false;

        while (UserData != true) { 
            if (User.PlayerName === undefined || User.PlayerPic === undefined || User.PlayerColor === undefined) { 
                UserData = false; 
                break;
            } else if (User.PlayerName != undefined && User.PlayerPic != undefined && User.PlayerColor != undefined) { 
                UserData = true;
                break;
            }
        }
        
        while (UserData === false) {
            if (User.PlayerName === undefined) { 
                ProfileName();
                break;
            } else if (User.PlayerPic === undefined) { 
                ProfilePic();
                break;
            } else if (User.PlayerColor === undefined) { 
                ProfileColor();
                break;
            }

            function ProfileName() { 
                ShowSection(FormNameSection);

                SubmitNameButton.addEventListener("click", () => {
                    User.PlayerName = FormInputField.textContent;
                    if (UserData === false) { 
                        MakeUser();
                    }
                });
            }

            function ProfilePic() { 
                ShowSection(FormPFPSection);

                
                if (UserData === false) { 
                    MakeUser();
                }
            }

            function ProfileColor() { 
                ShowSection(FormColorSection);

                SubmitColorButton.addEventListener("click", () => {
                    FormColor = FormColorInput.
                    if (UserData === false) { 
                        MakeUser(); 
                    }
                });
            }

        }

        /*
        function ProfileName() { 
            ShowSection(FormNameSection);
        }

        function ProfilePic() { 
            ShowSection(FormPFPSection);
        }

        function ProfileColor() { 
            ShowSection(FormColorSection);
        }
        */
    }



    
    function Game() { 

    }

    function RoundResults() { 

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
