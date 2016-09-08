import Player from '../src/js/Player'
import {weapons, getRandomWeapon} from '../src/js/gameEngine'

describe('Player', function(){
	const [selector, name] = ['testDOM', 'test'];

	describe('#constructor', function(){
		
		it('should create new Player', function() {
			const playerTest = new Player(selector, name);
			expect(playerTest instanceof Player).to.be.true;
		});

		it('a player should has a name', function() {
			const playerTest = new Player(selector, name);
			expect(playerTest.name).equal(name);
		});

		it('a player should has a weapon', function() {
			const playerTest = new Player(selector, name);
	
			playerTest.weapon = getRandomWeapon();
			
			let weaponExists = weapons.indexOf(playerTest.weapon) !== -1;

			expect(weaponExists).to.be.true;
		});
	});
});