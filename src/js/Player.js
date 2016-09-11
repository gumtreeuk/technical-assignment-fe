import * as gameEngine from './gameEngine'

/**
 * Build the DOM of a player
 * Set name and weapons
 * @param {Player object} player
 */
function _setDom(player){
    const name = document.createElement('h3');
    name.className = 'player-name';
    name.innerText = player.name;

    _setWeapons(player);

    player.dom.appendChild(name);
}

/**
 * Build the DOM of weapons available
 * @param {Player object} player
 */
function _setWeapons(player){
    const div = document.createElement('div');

    div.classList.add('player-weapons');
    
    gameEngine.weapons.forEach(weapon => {
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.classList.toggle('hidden', !player.isHuman);
        a.classList.add('card', weapon);
        a.dataset.weapon = weapon;
        a.title = weapon;
        
        img.src = require('../img/' + weapon + '.png')
        img.dataset.weapon = weapon;
        img.alt = weapon;

        a.appendChild(img);
        div.appendChild(a);
    });
    
    player.dom.appendChild(div);
}

/**
 * Default class of a player
 */
export default class Player{
    /**
     * Create a instance of Player
     * @param  {string} selector it is used to query by id in a DOM
     * @param  {string} name     it is the Player name
     * @param  {bool} isHuman    just to know :)
     * @return {Player object}
     */
    constructor(selector, name, isHuman){
        this._dom = document.querySelector(selector);
        this._name = name;
        this._isHuman = isHuman;
        this._weapon = '';

        _setDom(this);
    }

    set dom(dom){
        return this._dom = dom;
    }
    
    get dom(){
        return this._dom;
    }

    set weapon(weapon){
        return this._weapon = weapon;
    }

    get weapon(){
        return this._weapon;
    }

    set name(name){
        return this._name = name;
    }

    get name(){
        return this._name;
    }

    set isHuman(isHuman){
        return this._isHuman = isHuman;
    }

    get isHuman(){
        return this._isHuman;
    }
}