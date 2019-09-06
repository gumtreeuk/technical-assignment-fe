import print from '../src/js/logger';

describe('example module', () => {

	it('should log out a message to the console', () => {
		// setup
		let consoleLogWasCalledWith;
		const originalConsoleLog = console.log;
		const fakeConsoleLog = message => consoleLogWasCalledWith = message;
		console.log = fakeConsoleLog;
		// exercise
		print('some message');
		expect(consoleLogWasCalledWith).toMatch('some message');
		// teardown
		console.log = originalConsoleLog;
	});

});
