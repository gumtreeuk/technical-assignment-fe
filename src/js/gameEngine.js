export const weapons = ['rock', 'paper', 'scissor'];

/**
 * This function returns a random option from weapons 
 * @return {string}
 */
export function getRandomWeapon() {
	let rnd = Math.floor(Math.random() * weapons.length);
	return weapons[rnd];
}