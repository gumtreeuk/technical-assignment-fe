export default class Player{    
    constructor(selector, name){
        this.domElement = document.getElementById(selector);
        this._name = name;
        this._weapon = null;
    }

    set weapon(weapon){
        this._weapon = weapon;
    }

    static get weapon(){
        return this._weapon;
    }
}