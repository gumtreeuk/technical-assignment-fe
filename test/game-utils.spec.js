import {findWinner} from "../src/js/game-utils";

describe('game-utils module', () => {
	describe('findWinner method', () => {
		it('should return correct result when passed in with correct parameters', () => {
			// act
			const choices = {
				rock: {id: 'rock', beats: ['scissors']},
				paper: {id: 'paper', beats: ['rock']},
				scissors: {id: 'scissors', beats: ['paper']}
			};
			const playerOneChoice = {choice: 'rock'};
			const playerTwoChoice = {choice: 'paper'};

			// arrange
			const winner = findWinner(choices, playerOneChoice, playerTwoChoice);
			// assert
			expect(winner).to.equal(2);
		});
		it('should return correct result when passed in with correct parameters and extended choices', () => {
			// act
			const choices = {
				rock: {id: 'rock', beats: ['lizard','scissors']},
				paper: {id: 'paper', beats: ['spock','rock']},
				scissors: {id: 'scissors', beats: ['paper', 'lizard']},
				lizard: {id: 'lizard', beats: ['spock','paper']},
				spock: {id: 'spock', beats: ['scissors','rock']}
			};
			const playerOneChoice = {choice: 'lizard'};
			const playerTwoChoice = {choice: 'spock'};

			// arrange
			const winner = findWinner(choices, playerOneChoice, playerTwoChoice);
			// assert
			expect(winner).to.equal(1);
		});
	});
});
