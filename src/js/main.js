require('../css/main.scss');

import WebFont from 'webfontloader';
import setupGame from './gameHandler';

setupGame();

WebFont.load({
	google: {
		families: ['Bungee Shade', 'Open Sans']
	}
});