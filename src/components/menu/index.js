require('../../styles/variables.scss');
require('./style.scss');

import React from 'react';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.handleIconClicked = this.handleIconClicked.bind(this);
	}
	/**
	 * Changes the mode of the game on click of the menu mode.
	 * this.props.changeMode() must exist.
	 */
	handleIconClicked() {
		let mode = 'human';
		if (this.props.mode === 'human') {
			mode = 'computer';
		}
		this.props.changeMode(mode);
	}
	render() {
		const {mode} = this.props;
		let menuIconClass = 'icon--human';
		if (mode === 'computer') {
			menuIconClass = 'icon--computer'
		}
		const childrenElements = [
			"Rock, Paper, Scissors",
			React.createElement('button', {
				key: 'menu-icon',
				title: mode,
				className: 'btn',
				onClick: this.handleIconClicked
			}, React.createElement('span', {className: menuIconClass}))
		]

		return React.createElement("div", {
			className: 'menu'
		}, childrenElements, null);

	}
}
