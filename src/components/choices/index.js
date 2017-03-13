require('./style.scss');

import React from 'react';

export default class Choices extends React.Component {
	constructor(props) {
		super(props);
		this.handleActionClick = this.handleActionClick.bind(this);
	}

	handleActionClick(choice) {
		if (this.props.playerSubmit) {
			this.props.playerSubmit({player: 1, choice: choice});
		}
	}

	render() {
		const {
			choices,
			mode
		} = this.props;
		let choicesActions = [];

		let choicesButtons;
		if (choices) {
			let keys = Object.keys(choices);
			for (let i = 0; i < keys.length; i++) {
				choicesActions.push(React.createElement('span', {
					key: 'comp-action-' + i,
					className: 'player-action player-action--' + choices[keys[i]].id,
					onClick: () => {
						this.handleActionClick(choices[keys[i]].id)

					}
				}, ''));
			}
		}
		choicesButtons = React.createElement('div', {
			key: 'comp-action-1',
			className: 'player-actions'
		}, choicesActions);

		if (mode && mode === 'computer') {
			choicesButtons = React.createElement('div', {
				key: 'comp-1',
				className: 'player-actions'
			}, React.createElement('span', {
				key: 'comp-action',
				className: 'computer-action',
				onClick: () => {
					this.handleActionClick('computer')
				}
			}));
		}

		return choicesButtons;
	}
}
