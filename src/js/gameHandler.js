import * as gameEngine from './gameEngine'
import Player from './Player'

const result = document.getElementById('result');
const playerA = new Player('playerA', 'You');
const playerB = new Player('playerB', 'Computer');

export default function setupGame(){
    playerA.dom.addEventListener('click', handleWeaponSelection);
}

function handleWeaponSelection(e){
    if(!e.target.dataset.weapon) return;

    const playerAWeapon = e.target.dataset.weapon;
    const playerBWeapon = gameEngine.getRandomWeapon();

    playerA.weapon = playerAWeapon;
    playerB.weapon = playerBWeapon;

    setClassSelected(playerA, playerAWeapon);
    setClassSelected(playerB, playerBWeapon);
   
    const response = gameEngine.play(playerAWeapon, playerBWeapon);

    if(response.result){
        result.innerText = response.message;
    }else if(response.error){
        console.error(response.error);
    }
}

function setClassSelected(player, weapon){
    var previousWeapon = player.dom.getElementsByClassName('selected');

    if(previousWeapon.length){
        previousWeapon[0].classList.remove('selected');
    }

    player.dom.getElementsByClassName(weapon)[0].classList.add('selected');
}