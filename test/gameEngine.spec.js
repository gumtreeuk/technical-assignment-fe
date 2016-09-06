import * as gameEngine from '../src/js/gameEngine'

describe('game engine', () => {

	it('should get a random weapon', () => {
		
		let weapon = gameEngine.getRandomWeapon();
		let weaponExists = gameEngine.weapons.indexOf(weapon) !== -1;

		expect(weaponExists).to.be.true;
	});

	describe('playerA choosing paper', () => {
		it('should tie if both choose paper', () => {
			var result = gameEngine.play('paper', 'paper');

			expect(result).to.be.equal(gameEngine.results.TIE);
		});

		it('should win if plays paper against rock', () => {
			var result = gameEngine.play('paper', 'rock');

			expect(result).to.be.equal(gameEngine.results.WIN);
		});

		it('should lose if plays paper against scissor', () => {
			var result = gameEngine.play('paper', 'scissor');

			expect(result).to.be.equal(gameEngine.results.LOSE);
		});
	});

	describe('playerA choosing rock', () => {
		it('should tie if both choose rock', () => {
			var result = gameEngine.play('rock', 'rock');

			expect(result).to.be.equal(gameEngine.results.TIE);
		});

		it('should win if plays rock against scissor', () => {
			var result = gameEngine.play('rock', 'scissor');

			expect(result).to.be.equal(gameEngine.results.WIN);
		});

		it('should lose if plays rock against paper', () => {
			var result = gameEngine.play('rock', 'paper');

			expect(result).to.be.equal(gameEngine.results.LOSE);
		});
	});

	describe('playerA choosing scissor', () => {
		it('should tie if both choose scissor', () => {
			var result = gameEngine.play('scissor', 'scissor');

			expect(result).to.be.equal(gameEngine.results.TIE);
		});

		it('should win if plays scissor against paper', () => {
			var result = gameEngine.play('scissor', 'paper');

			expect(result).to.be.equal(gameEngine.results.WIN);
		});

		it('should lose if plays scissor against rock', () => {
			var result = gameEngine.play('scissor', 'rock');

			expect(result).to.be.equal(gameEngine.results.LOSE);
		});
	});
});