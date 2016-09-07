/**
 * Available weapons
 * You can add new weapons in order to exetend this game eg.: ['rock', 'paper', 'scissor', 'spock', 'lizard']
 * @type {Array}
 */
export const weapons = ['rock', 'paper', 'scissor'];

/**
 * Possible match results
 * @type {Object}
 */
export const results = {
    'TIE': 'TIE',
    'WIN': 'WIN',
    'LOSE': 'LOSE'
};

/**
 * This function returns a random option from weapons 
 * @return {string}
 */
export function getRandomWeapon() {
    let rnd = Math.floor(Math.random() * weapons.length);
    return weapons[rnd];
}

/**
 * This function receives 2 options and returns the result of playerA against player B
 * @param  {string}
 * @param  {string}
 * @return {string} 
 */
export function play(playerA, playerB){
    if(!playerA){
        return {
            'error': 'PlayerA should select a weapon'
        }
    }

    if(!playerB){
        playerB = getRandomWeapon();
    }

    const weaponsLength = weapons.length;
    const playerAScore = weapons.indexOf(playerA.toLowerCase());
    const playerBScore = weapons.indexOf(playerB.toLowerCase());
    
    let response = {
        'playerA': playerA,
        'playerB': playerB
    };
    
    // do calc to define winner
    let resultMatch = (weaponsLength + playerAScore - playerBScore) % weaponsLength;

    if(resultMatch == 0){ 
        // if the rest is 0 they put the same weapon
        response['result'] = results.TIE;
    }else if(resultMatch % 2 == 1){
        // if the rest is odd then playerA wins
        response['result'] = results.WIN;
    }else{
        // else playerB wins 
        response['result'] = results.LOSE;
    }

    return response;
}

/**
 * Demonstrate a match
 * @return {string}
 */
export function playDemo(){
    const playerA = getRandomWeapon();
    const playerB = getRandomWeapon();

    return play(playerA, playerB);
}