import * as gameLogic from "./gameLogic"
const gameMode = {
    "PLAY": "play",
    "SIMULATE": "simulate"
};
const players = {
    "USER":"YOU",
    "COMPUTER": "COMPUTER",
    "COMPUTER1": "COMPUTER1",
    "COMPUTER2": "COMPUTER2"
};
/**
* This method init all browser event handlers needed  for the game
*/
export default function initEventHandlers() { 
    initGameModeHandler();
    initPlayerModeHandler();
    initAutomaticModeHandler();
}
/**
* This method init the event handler for the game mode choice
* Possible modes: User VS Computer, Computer VS Computer
*/
function initGameModeHandler(){
    document.getElementById("game-mode").onchange = function() { 
        // hide result section each time game mode changes
        setDisplayProperty(".result-section", "none");
        document.getElementById("user-choice").innerHTML = "";
        var choiceDisplayers = document.querySelectorAll(".choice"); 
            for (var i = 0; i < choiceDisplayers.length; ++i) {
            choiceDisplayers[i].innerHTML = "";
        }
        var selectedValue = this.options[this.selectedIndex].value;
        displayGameMode(selectedValue);
    };  
}
/**
* This method init the event handler for the User VS Computer mode
*/
function initPlayerModeHandler(){
    document.getElementById("user-choices").onclick = function(event){
        var computerValue,userChoice,selectedValue, result;
        if(event.target.nodeName ==="BUTTON"){
            // get user choice
            selectedValue = event.target.getAttribute("data-value");
            userChoice = gameLogic.possibleChoices[selectedValue]; 
            document.getElementById("user-choice").innerHTML = userChoice;
            // get computer choice
            computerValue = setComputerChoice("computer");
            result = gameLogic.computeChoices({"label": players.USER, "value":userChoice}, 
                                              {"label":players.COMPUTER, "value":computerValue});   
            displayResults(result);
        }  
    }; 
}
/**
* This method init the event handler for the Computer VS Computer mode
*/
function initAutomaticModeHandler() {
    document.getElementById("simulate").onclick = function() { 
    var computer1Value = setComputerChoice("computer1");
    var computer2Value = setComputerChoice("computer2");
    var result = gameLogic.computeChoices({"label": players.COMPUTER1, "value":computer1Value}, 
                                          {"label":players.COMPUTER2, "value":computer2Value});
    displayResults(result);

    };
}
/**
* This method display the right game mode
* @param mode the mode to display : User VS Computer, Computer VS Computer or none
*/
function displayGameMode(mode) {
    // hide the result section each time the user changes game mode
    setDisplayProperty(".result-section", "none");
    if(mode === gameMode.PLAY){
        displayUserMode();
    }else if(mode === gameMode.SIMULATE) {
        displayAutomaticMode();
    }else {
       // Hide game modes when user select default value
       setDisplayProperty(".automatic-mode", "none");
       setDisplayProperty(".user-mode", "none");  
    }
}
/**
* This method handles the display of the user mode
*/
function displayUserMode(){
    setDisplayProperty(".user-mode", "block");
    setDisplayProperty(".automatic-mode", "none");
}
/**
* This method handles the display of the automatic mode
*/
function displayAutomaticMode(){
    setDisplayProperty(".automatic-mode", "block");
    setDisplayProperty(".user-mode", "none");
}
/**
* This method sets the css display property
* @param cssSelector the locator of the html element
* @param propertyValue the value to set
*/
function setDisplayProperty(cssSelector, propertyValue) {
    document.querySelectorAll(cssSelector)[0].style.display = propertyValue;
}
/**
* This set the game choice for a computer
* @param containerId the displayer of the computer choice
* @return computerChoice the choice of the computer
*/
function setComputerChoice(containerId) {
    var computerChoice = gameLogic.generateChoice();
    document.getElementById(containerId).innerHTML = computerChoice;
    return computerChoice;
    
}
/**
* Displays the resuls of the game
* @param settings the settings needed for display
*/
function displayResults(settings) {
    var result = gameLogic.possibleResults.DRAW;
    if(settings.RESULT === gameLogic.possibleResults.WIN){
        result = settings.WINNER + " " + settings.RESULT;
    }
    document.getElementById("result").innerHTML = result; 
    setDisplayProperty(".result-section", "block");
     
}