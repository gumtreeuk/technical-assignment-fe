require('./style.scss');

import React from 'react';

export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.handleReloadClick = this.handleReloadClick.bind(this);
	}
	/**
	 * Handles a click from the reload game button.
	 * this.props.reloadGame must exist.
	 */
	handleReloadClick() {
		this.props.reloadGame();
	}
	render() {
		const {
			playerNumber,
			choice,
			wins,
			winner,
			gameOver,
			mode
		} = this.props;
		let className = 'player-icon';
		let playerName = '';
		let winsDisplay = [];
		let playMode = mode ? mode : 'human';
		switch (playerNumber) {
			case 1:
				className += ' player--one';
				playerName = `Player 1: ${playMode.toLowerCase() === 'human' ? 'Human' : 'Computer'}`;
				break;
			case 2:
				className += ' player--two';
				playerName = 'Player 2: Computer';
				break;
		}
		if (choice) {
			className += ` player-icon--selected player-icon--${choice}`;
		}
		if (winner) {
			className += ' player-icon--winner';
		}

		if (wins) {
			winsDisplay = [React.createElement('div', {
					key: 'winsCountStar',
				className: 'stars',
				}),
				React.createElement('a', {
					key: 'winsCount',
					className: 'wins-count',
				}, wins)];
		}
		if (gameOver && playerNumber === 1) {
			winsDisplay.push(React.createElement('div', {
				key: 'reload',
				className: 'replay-modal',
			},
			React.createElement('div', {
				className: 'game-reload',
				onClick: this.handleReloadClick
			})));
		}
		return React.createElement('span', {
			className: 'player',
		}, [
			React.createElement('p', {
				key: 'txt-0',
			}, playerName),
			React.createElement('span', {
				key: 'ci-0',
				className: className
			}, winsDisplay)
		]);
	}
}
