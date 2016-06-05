import * as gameLogic from "../src/js/gameLogic"

describe('game Logic', () => {

	it('should genarate one of the possible choices', () => {
		// setup
        var isGenerationValid = false;
        var counter = 0;
        
        // Run genarator function hundred times 
        while(counter<100){
            isGenerationValid = gameLogic.possibleChoices.indexOf(gameLogic.generateChoice()) !== -1;
            if(!isGenerationValid) break;
            counter++;
        }
        
        // Check al genarated values were valid
		expect(isGenerationValid).to.be.true;
        
	});
    it('should draw with rock choice', () => {
		// setup
        var choice1 = {label: "player1", value: "rock"};
        var choice2 = {label: "player2", value: "rock"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.DRAW);
        
	});
    it('should draw with paper choice', () => {
		// setup
        var choice1 = {label: "player1", value: "paper"};
        var choice2 = {label: "player2", value: "paper"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.DRAW);
        
	});
    it('should draw with scissors choice', () => {
		// setup
        var choice1 = {label: "player1", value: "scissors"};
        var choice2 = {label: "player2", value: "scissors"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.DRAW);
        
	});
    it('paper beats rock', () => {
		// setup
        var choice1 = {label: "player1", value: "paper"};
        var choice2 = {label: "player2", value: "rock"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.WIN);
        expect(resultOptions.WINNER).to.be.equal("player1");
        
	});
    it('rock beats scissors', () => {
		// setup
        var choice1 = {label: "player1", value: "scissors"};
        var choice2 = {label: "player2", value: "rock"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.WIN);
        expect(resultOptions.WINNER).to.be.equal("player2");
        
	});
    it('scissors beats paper', () => {
		// setup
        var choice1 = {label: "player1", value: "scissors"};
        var choice2 = {label: "player2", value: "paper"};
        
        // Check the winner choice
        var resultOptions = gameLogic.computeChoices(choice1, choice2);
        
        
		expect(resultOptions.RESULT).to.be.equal(gameLogic.possibleResults.WIN);
        expect(resultOptions.WINNER).to.be.equal("player1");
        
	});

});
