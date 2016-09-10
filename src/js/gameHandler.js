import * as gameEngine from './gameEngine'
import Player from './Player'

const countStart = 0;
const countEnd = 3;
let count = countStart;
let playing = false;
const result = document.getElementById('result');
const playerA = new Player('playerA', 'You');
const playerB = new Player('playerB', 'Computer');

export default function setupGame(){
    playerA.dom.addEventListener('click', handleWeaponSelection);
}

function handleWeaponSelection(e){
    if(!e.target.dataset.weapon) return;
    if(playing) return;

    playing = true;

    setPlayerSelection(playerA, e.target.dataset.weapon);
    setPlayerSelection(playerB, '');

    startCount();
}

function setClassSelected(player){

    var previousWeapon = player.dom.getElementsByClassName('selected');

    if(previousWeapon.length){
        previousWeapon[0].classList.remove('selected');
    }

    if(player.weapon){
        player.dom.getElementsByClassName(player.weapon)[0].classList.add('selected');
    }
}

function setPlayerSelection(player, weapon){
    player.weapon = weapon;
    setClassSelected(player);
}

function startCount(){
    count++;
    
    if(count > countEnd){
        count = countStart;
        playGame();
    }else{
        result.innerText = count;
        setTimeout(startCount, 700);
    }
}

function playGame(){
    setPlayerSelection(playerB, gameEngine.getRandomWeapon());

    const response = gameEngine.play(playerA.weapon, playerB.weapon);

    if(response.result){
        result.innerText = response.message;
    }else if(response.error){
        console.error(response.error);
    }

    playing = false;
}