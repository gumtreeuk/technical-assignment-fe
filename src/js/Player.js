export default class Player{
    constructor(selector, name){
        this.dom = document.getElementById(selector);
        this.name = name;
        this.weapon = '';
    }

    static set weapon(weapon){
        return this._weapon = weapon;
    }

    static get weapon(){
        return this._weapon;
    }

    static get name(){
        return this._name;
    }
}