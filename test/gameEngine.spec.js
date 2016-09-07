import * as gameEngine from '../src/js/gameEngine'

describe('game engine', function(){

	it('should get a random weapon', function(){
		const weapon = gameEngine.getRandomWeapon();
		const weaponExists = gameEngine.weapons.indexOf(weapon) !== -1;

		expect(weaponExists).to.be.true;
	});

	const possibilities = [
		{
			'playerA': 'rock',
			'playerB': 'rock',
			'result': 'TIE'
		},{
			'playerA': 'rock',
			'playerB': 'paper',
			'result': 'LOSE'
		},{
			'playerA': 'rock',
			'playerB': 'scissor',
			'result': 'WIN'
		},{
			'playerA': 'paper',
			'playerB': 'rock',
			'result': 'WIN'
		},{
			'playerA': 'paper',
			'playerB': 'paper',
			'result': 'TIE'
		},{
			'playerA': 'paper',
			'playerB': 'scissor',
			'result': 'LOSE'
		},{
			'playerA': 'scissor',
			'playerB': 'rock',
			'result': 'LOSE'
		},{
			'playerA': 'scissor',
			'playerB': 'paper',
			'result': 'WIN'
		},{
			'playerA': 'scissor',
			'playerB': 'scissor',
			'result': 'TIE'
		}
	];

	possibilities.forEach(function(match){
		it(match.playerA + ' against ' + match.playerB + ' should ' + match.result, function(done) {
			const response = gameEngine.play(match.playerA, match.playerB);
			expect(response.result).equal(match.result);
			done();
		});
	})
	
	describe('demo battle', function(){
		it('should create random match to demonstrate', () => {
			const response = gameEngine.playDemo();
			const resultExists = Object.keys(gameEngine.results).indexOf(response.result) !== -1;

			expect(resultExists).to.be.true;
		});
	});
});