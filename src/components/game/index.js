require('./style.scss');

import React from 'react';
import Player from '../player';
import Menu from '../menu';
import Choices from '../choices';
import ScoreTracker from '../score-tracker';
import {findWinner, getRandomChoice} from '../../js/game-utils';


export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOne: props.playerOne,
			playerTwo: props.playerTwo,
			scoreboard: props.scoreboard,
			choices: props.choices,
			mode: 'human'
		};
		this.playerSubmit = this.playerSubmit.bind(this);
		this.reloadGame = this.reloadGame.bind(this);
		this.changeMode = this.changeMode.bind(this);
		if (props.playerOne) {
			this.props.playerOne.reloadGame = this.reloadGame;
		}
		if (props.playerTwo) {
			this.props.playerTwo.reloadGame = this.reloadGame;
		}
		this.state.mode = 'human';
	}

	/**
	 * Changes the game mode state.
	 * @param  {String} mode [Must be either 'human' or 'computer']
	 */
	changeMode(mode) {
		const initial = require('../../js/initial-state.js').getData();
		initial.playerOne.mode = mode;
		initial.playerOne.playerSubmit = this.playerSubmit;
		initial.playerOne.reloadGame = this.reloadGame;
		this.setState({
			playerOne: initial.playerOne,
			playerTwo: initial.playerTwo,
			scoreboard: initial.scoreboard,
			mode: mode,
			choices: initial.choices
		});
	}


	/**
	 * Handles the player's submission of an action .
	 * Called from the player component.
	 * This function modifies the state objects for: playerOne, playerTwo, and score-tracker.
	 * @param {Object} action [an action object, containing player and choice]
	 */
	playerSubmit(action) {
		let {playerOne, playerTwo, scoreboard, choices} = this.state;
		const valid = (action && action.player && action.choice);
		if (valid && action.player === 1) {
			if (action.choice === 'computer') {
				playerOne.choice = getRandomChoice(this.props.choices).id;
			} else {
				playerOne.choice = action.choice;
			}
		}
		if (valid && action.player === 2) {
			playerTwo.choice = action.choice;
		}
		if (!playerTwo.isHuman) {
			playerTwo.choice = getRandomChoice(this.props.choices).id;
		}
		if (playerOne.choice && playerTwo.choice) {
			scoreboard.games[scoreboard.currentGame] = {
				winner: findWinner(this.props.choices, playerOne, playerTwo),
				playerOne: playerOne.choice,
				playerTwo: playerTwo.choice
			};
			let winner = scoreboard.games[scoreboard.currentGame].winner;
			if (winner > 0) {
				if (winner === 1) {
					playerOne.wins++;
					if (playerOne.wins === scoreboard.bestOf) {
						playerOne.winner = true;
						playerOne.gameOver = true;
						playerTwo.gameOver = true;
					}
				} else if (winner === 2) {
					playerTwo.wins++;
					if (playerTwo.wins === scoreboard.bestOf) {
						playerTwo.winner = true;
						playerOne.gameOver = true;
						playerTwo.gameOver = true;
					}
				}
				scoreboard.currentGame++;
			}
		}
		this.setState({playerOne: playerOne, playerTwo: playerTwo, scoreboard: scoreboard, choices: choices});

	}

	/**
	 * Reloads the game state to start a new game.
	 */
	reloadGame() {
		const initial = require('../../js/initial-state.js').getData();
		initial.playerOne.playerSubmit = this.playerSubmit;
		initial.playerOne.reloadGame = this.reloadGame;
		let mode = this.state.mode;
		initial.playerOne.mode = mode;
		this.setState({
			playerOne: initial.playerOne,
			playerTwo: initial.playerTwo,
			scoreboard: initial.scoreboard,
			mode: mode,
			choices: initial.choices
		});
	}

	render() {
		const {playerOne, playerTwo, scoreboard, choices} = this.state;
		return React.createElement('div', {
				className: 'main'
			}, React.createElement('div', {
				className: 'header'
			}, React.createElement(Menu, {
				mode: this.state.mode,
				changeMode: this.changeMode
			})),
			React.createElement('div', {
				className: 'section section--top'
			}, React.createElement(Player, playerOne)),
			React.createElement('div', {
				className: 'section section--middle'
			}, React.createElement(Player, playerTwo)),
			React.createElement('div', {
					className: 'section section--bottom'
				}, React.createElement(Choices, {choices: choices, mode: this.state.mode, playerSubmit: this.playerSubmit}),
				React.createElement(ScoreTracker, scoreboard)));
	}
}
