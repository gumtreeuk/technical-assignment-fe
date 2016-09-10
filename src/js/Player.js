import * as gameEngine from './gameEngine'

function _setWeapons(player){
    gameEngine.weapons.forEach(weapon => {
        let a = document.createElement('a');
        let img = document.createElement('img');

        a.className = 'card-weapon ' + weapon;
        a.dataset.weapon = weapon;
        a.title = weapon;
        
        img.src = require('../img/' + weapon + '.png')
        img.dataset.weapon = weapon;
        img.alt = weapon;

        a.appendChild(img);

        player.dom.appendChild(a);
    });
}

export default class Player{
    constructor(selector, name){
        this.dom = document.getElementById(selector);
        this._name = name;
        this._weapon = '';

        _setWeapons(this);
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