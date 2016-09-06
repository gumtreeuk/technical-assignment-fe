export const weapons = ['rock', 'paper', 'scissor'];

export const results = {
	'TIE': 'TIE',
	'WIN': 'WIN',
	'LOOSE': 'LOOSE'
};

/**
 * This function returns a random option from weapons 
 * @return {string}
 */
export function getRandomWeapon() {
	let rnd = Math.floor(Math.random() * weapons.length);
	return weapons[rnd];
}

/**
 * This function receives 2 options and returns the result of playerA against player B
 * @param  {string}
 * @param  {string}
 * @return {string} 
 */
export function play(playerA, playerB){
	return (playerA === playerB) ? results.TIE : results.WIN;
}