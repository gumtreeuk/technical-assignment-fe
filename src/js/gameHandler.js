import * as gameEngine from './gameEngine'
import Player from './Player'

/**
 * Default start number to countdown  
 * @type {Number}
 */
const countStart = 0;

/**
 * Maximum count to countdown
 * @type {Number}
 */
const countEnd = 3;

/**
 * Simpler counter to countdown
 * @type {Number}
 */
let count = countStart;

/**
 * Custom message to countdown
 * @type {Array}
 */
const countdownMessages = [
    'Ready',
    'Set',
    'Go!'
];

/**
 * Boolean to know when a game is in course
 * It is used to prevent multiple clicks on a card
 * which could starts many rounds 
 * @type {Boolean}
 */
let playing = false;

/**
 * This is the default DIV
 * to show the game result
 * @type {DOM Element}
 */
const result = document.getElementById('result');

/**
 * Set playerA as game player
 * @type {Player}
 */
const playerA = new Player('#playerA', 'You', true);

/**
 * Set playerB as a computer player 
 * @type {Player Object}
 */
const playerB = new Player('#playerB', 'Computer', false);

/**
 * checks if browser supports touh events
 * @type {Bool}
 */
const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

/**
 * Minimal difference to define if it a valid move
 * @type {Number}
 */
const minTouch = 100;

/**
 * Save start position movement
 * @type {Number}
 */
let startEventX = 0;

/**
 * Save end position movement
 * @type {Number}
 */
let endEventX = 0;

/**
 * Default function to setup all the game
 * Set playerA events
 * @return {[type]} [description]
 */
export default function setupGame(){
    playerA.dom.addEventListener('click', handleWeaponSelection);

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove);

    window.addEventListener('keydown', handleKeyboardEvent);

    document.body.classList.toggle('notouch', !isTouch);
    document.body.classList.toggle('touch', isTouch);
}

/**
 * Handle keyborad events
 * @param  {Event object} e
 */
function handleKeyboardEvent(e){
    const key = e.which || e.keyCode;

    if(playing) return;

    switch(key){
        case 39:
            selectWeapon(1);
            break;
        case 37:
            selectWeapon(-1);
            break;
        case 32:
            handleWeaponSelection();
            break;
        case 13:
            handleWeaponSelection();
            break;
        default:
            return;
    }
}

/**
 * Get event.X according to event mouse/touch
 * @param  {Event object} e
 */
function getEventX(e){
    return e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
}

/**
 * Save start touch movemnt
 * @param  {Event object} e
 */
function handleTouchStart(e){
    startEventX = getEventX(e);
    endEventX = startEventX;
}

/**
 * Save touch movement
 * @param  {Event object} e
 */
function handleTouchMove(e){
    endEventX = getEventX(e);
}

/**
 * Check if the touch movement is sufficiet to change weapon
 */
function handleTouchEnd(){
    if(playing) return;

    const diff = endEventX - startEventX;

    if(diff > minTouch){
        selectWeapon(-1);
    }else if(diff < -minTouch){
        selectWeapon(1);
    }

    startEventX = 0;
    endEventX = 0;
}

/**
 * Move next or previous weapon based on its sequential index in gameEngine 
 * @param  {Number} act defines +1 or -1 on idx, it represents next or previous
 */
function selectWeapon(act){
    let idx = gameEngine.weapons.indexOf(playerA.weapon) + act;

    if(idx < 0){
        idx = gameEngine.weapons.length - 1;
    }else if(idx >= gameEngine.weapons.length){
        idx = 0;
    }

    setPlayerSelection(playerA, gameEngine.weapons[idx]);
    setPlayerSelection(playerB, '');
}

/**
 * Select playerA weapon
 * and star the countdown
 * @param  {Event object} e
 */
function handleWeaponSelection(e){
    if(playing) return;

    let weapon = playerA.weapon || gameEngine.weapons[0];

    if(e && e.target.dataset.weapon){
        weapon = e.target.dataset.weapon;
    }
    
    playing = true;

    setPlayerSelection(playerA, weapon);
    setPlayerSelection(playerB, '');

    countdown();
}

/**
 * Manage cards' classes 
 * @param {Player Object} player
 */
function setClassSelected(player){

    var previousWeapon = player.dom.getElementsByClassName('selected');

    if(previousWeapon.length){
        previousWeapon[0].classList.remove('selected');
    }

    if(player.weapon){
        player.dom.getElementsByClassName(player.weapon)[0].classList.add('selected');
    }
}

/**
 * Assign weapon to player 
 * and call a function to handles styles
 * @param {Player object} player
 * @param {string} weapon name
 */
function setPlayerSelection(player, weapon){
    player.weapon = weapon;
    setClassSelected(player);
}

/**
 * Start and count the countdown to play a game round
 */
function countdown(){
    if(count >= countEnd){
        count = countStart;
        playGame();
    }else{
        result.innerText = countdownMessages[count] ? countdownMessages[count] : count;
        
        count++;
    
        setTimeout(countdown, 700);
    }
}

/**
 * Play the game, selecting a weapon to Player,
 * receives the gameEngine response
 * and show the result
 */
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