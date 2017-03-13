/**
 * Given two players, determines which one is the winner from given list of choices.
 * @param  {Object} choices [list of given choices, defined in initial state]
 * @param  {Object} playerOne [player one object, defined in initial state]
 * @param  {Object} playerTwo [player two object, defined in initial state]
 * @return {Object} Player [the winning player]
 */
export const findWinner = (choices, playerOne, playerTwo) => {
	let playerOneChoice = choices[playerOne.choice];
	let playerTwoChoice = choices[playerTwo.choice];
	if (playerOneChoice.id === playerTwoChoice.id) {
		return 0;
	} else {
		for (let i = 0; i < playerOneChoice.beats.length; i++) {
			if (playerOneChoice.beats[i] === playerTwoChoice.id) {
				return 1;
			}
		}
		return 2;
	}
};

/**
 * Picks a random choice from the available options.
 * @param  {Object} choices [list of given choices, defined in initial state]
 * @return {Object} choice [A choice, as defined in the initial state]
 */
export const getRandomChoice = (choices) => {
	const numChoices = Object.keys(choices).length - 1;
	const choiceNum = _getRandomIntInclusive(0, numChoices);
	return choices[Object.keys(choices)[choiceNum]];
};

/**
 * Finds a random integer between min and max
 * @param  {number} min [minimum of range]
 * @param  {number} max [maximum of range]
 * @return {number} random [a random number between min and max, inclusive]
 */
const _getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
