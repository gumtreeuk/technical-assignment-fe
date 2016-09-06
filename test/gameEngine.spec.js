import * as gameEngine from '../src/js/gameEngine'

describe('game engine', () => {

	it('should get a random weapon', () => {
		
		let weapon = gameEngine.getRandomWeapon();
		let weaponExists = gameEngine.weapons.indexOf(weapon) !== -1;

		expect(weaponExists).to.be.true;
	});

});