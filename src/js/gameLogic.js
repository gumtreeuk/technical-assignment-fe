export const possibleChoices = ["rock", "paper", "scissors"];
export const possibleResults = {
    "WIN":"WIN",
    "LOOSE": "LOOSE",
    "DRAW": "DRAW"
};
const gameRules = {
    "rock": {
        "paper": "LOOSE",
        "scissors": "WIN",
        "rock": "DRAW"
    },
    "paper": {
        "paper": "DRAW",
        "scissors": "LOOSE",
        "rock": "WIN"
    },
    "scissors": {
        "paper": "WIN",
        "scissors": "DRAW",
        "rock": "LOOSE"
    }
};
/**
* Generates a random choice
* @return one of the possible choices in rps game
*/
export function generateChoice() {
    var generatedValue = Math.floor(Math.random() * 3);
    return possibleChoices[generatedValue];
    
}
/**
* Given 2 possible choices compute their values to get the winner
* @param choice1 Choice and player label
* @param choice2 Choice and player label
* @return the result and the label of the winner if any
*/
export function computeChoices(choice1, choice2) {
    var winner = possibleResults.DRAW;
    var result = possibleResults.DRAW;
    if(gameRules[choice1.value][choice2.value] === possibleResults.WIN){
        winner = choice1.label;
        result = possibleResults.WIN;
    }else if(gameRules[choice2.value][choice1.value] === possibleResults.WIN){
        winner = choice2.label;
        result = possibleResults.WIN;
    }
    return {
      "RESULT": result,
      "WINNER": winner
        
    };    
}