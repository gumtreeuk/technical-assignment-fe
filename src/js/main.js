require('../styles/variables.scss');
require('../styles/main.scss');

import React from 'react';
import {render} from 'react-dom';
import Game from '../components/game';

/**
 * Loads the initial state for the game.
 * @return {Object} Initial state object
 */
function getInitialState() {
	return require('./initial-state.js').getData();
}

render(React.createElement(Game, getInitialState()), document.getElementById('content'));
