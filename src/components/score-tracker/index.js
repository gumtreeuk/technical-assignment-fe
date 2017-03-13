require('./style.scss');

import React from 'react';

export default class ScoreTracker extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {totalGames, bestOf, currentGame, games} = this.props;
		const gameStats = `Wins: ${currentGame}, BestOf: ${bestOf}, TotalGames: ${totalGames}`;

		const currentGameResult = games[games.length - 1];
		const result = games.length > 0 ? React.createElement('div', {}, currentGameResult.winner === 0 ? 'Draw' : `Player ${currentGameResult.winner} wins`) : '';

		return React.createElement('div', {
			className: 'game-statistics'
		}, result, gameStats);

	}
}
