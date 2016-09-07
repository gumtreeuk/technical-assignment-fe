import * as gameEngine from './gameEngine'
import Player from './Player'

const playerA = new Player('playerA', 'playerA');
const playerB = new Player('playerB', 'playerB');

export default function setupGame(){
    const weaponsDOM = document.getElementById('weapons');
    weaponsDOM.addEventListener('click', handleSelectWeapon);
}

function handleSelectWeapon(e){
    const playerAWeapon = getWeaponNameFromHash(e.target.href);
    const playerBWeapon = gameEngine.getRandomWeapon();

    playerA.weapon = playerAWeapon;
    playerB.weapon = playerBWeapon;
   
    const response = gameEngine.play(playerAWeapon, playerBWeapon);

    if(response.result){
        console.log(response);
    }else if(response.error){
        console.error(response.error);
    }
}

function getWeaponNameFromHash(str){
    return str.substring(str.indexOf('#') + 1);
}