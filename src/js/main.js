require('../css/main.scss');

import WebFont from 'webfontloader';
import setupGame from './gameHandler';


/**
 * Call the main function to setup the game 
 */
setupGame();

/**
 * Load fonts from Google Fonts
 * @type {Object}
 */
WebFont.load({
	google: {
		families: ['Bungee Shade', 'Open Sans']
	}
});