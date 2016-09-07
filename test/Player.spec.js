import Player from '../src/js/Player'

describe('Player', function(){
	const [selector, name] = ['testDOM', 'test'];
	const playerTest = new Player(selector, name);

	describe('#constructor', function(){
		it('should create new Player', () => {
			expect(playerTest instanceof Player).to.be.true;
		});
	});
});