import Player from '../src/js/Player'
import {weapons, getRandomWeapon} from '../src/js/gameEngine'

describe('Player', function(){
	const [selector, name] = ['body', 'test'];

	describe('#constructor', function(){
		
		it('should create new Player', function() {
			const playerTest = new Player(selector, name, 1);
			expect(playerTest instanceof Player).to.be.true;
		});

		it('a player should has a name', function() {
			const playerTest = new Player(selector, name, 1);
			expect(playerTest.dom.getElementsByClassName('player-name')[0].innerText).equal(name);
		});


		it('a player should has a set of weapons', function() {
			const playerTest = new Player(selector, name, 1);
			expect(playerTest.dom.getElementsByClassName('player-weapons').length !== -1).to.be.true;
		});

		it('a player should has a weapon', function() {
			const playerTest = new Player(selector, name, 1);
	
			playerTest.weapon = getRandomWeapon();
			
			let weaponExists = weapons.indexOf(playerTest.weapon) !== -1;

			expect(weaponExists).to.be.true;
		});
	});
});