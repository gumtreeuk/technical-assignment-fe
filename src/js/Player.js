import * as gameEngine from './gameEngine'

function _setDom(player){
    const name = document.createElement('h3');
    name.className = 'player-name';
    name.innerText = player.name;

    _setWeapons(player);

    player.dom.appendChild(name);
}

function _setWeapons(player){
    const div = document.createElement('div');

    div.className = 'player-weapons';
    
    gameEngine.weapons.forEach(weapon => {
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.className = 'card-weapon ' + weapon;
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

export default class Player{
    constructor(selector, name){
        this.dom = document.getElementById(selector);
        this._name = name;
        this._weapon = '';

        _setDom(this);
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
}