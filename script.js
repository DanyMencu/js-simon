//*1.Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

//*Dopo 30 secondi:
//*2-i numeri in pagina devono essere rimossi;
//*3-l’utente deve inserire, UNO ALLA VOLTA, i numeri che ha visto precedentemente, tramite il prompt().

//*4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//* 1.
//Ref
const indexText = document.querySelector('.text');

setTimeout(() => {
    //HTML cleaning
    indexText.innerHTML = '';

    const randomNumbers = randomNumUniv(5);

    //Output numbers
    indexText.innerHTML = randomNumbers;

    //Second part of the game (remember the numbers)
    setTimeout(() => {
        //* 2.
        //HTML cleaning before the prompt to prevent Crome glitch
        indexText.innerHTML = '';
        setTimeout(() => {
            //* 3.
            const playerNumbers = getUserNumbers (randomNumbers.length)

            //* 4.
            const rightNumbers = randomNumbers.filter(number => playerNumbers.includes(number));

            if (rightNumbers.length != 0) {
                indexText.innerHTML = `Hai ricordato ben ${rightNumbers.length} numeri ed erano: ${rightNumbers}`;
            } else {
                indexText.innerHTML = `Non hai ricordato nemmeno un numero, CAPRA! Mangia più pesce e riprova.`;
            }
        }, 100);

    },30000);

}, 1500);

/* 
*FUNCTIONS
*/

function randomNumUniv(itemNumber) {
    const uniNumber = [];

    while (uniNumber.length < itemNumber) {
        const rand = randomNumber (1, 100);

        //Check univoco
        if ( !uniNumber.includes(rand) ) {
            uniNumber.push(rand);
        };
    };

    return uniNumber;

};

function randomNumber (min, max) {
    return Math.floor( Math.random() *(max - min + 1) + min );
};

function getUserNumbers (askTimes) {
    const numbers = [];

    while (numbers.length < askTimes) {
        const userNumber = parseInt( prompt(`Inserire uno alla volta i numeri che si ricordano. ${numbers.length + 1} di ${askTimes}`) );

        if ( !numbers.includes(userNumber) && !isNaN(userNumber) ) {
            numbers.push(userNumber);
        };
    };

    return numbers;
};