//*1.Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

//*Dopo 30 secondi:
//*2-i numeri in pagina devono essere rimossi;
//*3-l’utente deve inserire, UNO ALLA VOLTA, i numeri che ha visto precedentemente, tramite il prompt().

//*4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//* 1.
//Ref
const indexText = document.querySelector('.text');

//Random numbers array
const randomNumbers = [];
const playerNumbers = [];

setTimeout(() => {
    //HTML cleaning
    indexText.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        randomNumbers.push( randomNum(1, 99) );
    }

    //Output numbers
    indexText.innerHTML = randomNumbers;

    //Second part of the game (remember the numbers)
    setTimeout(() => {
        //* 2.
        //HTML cleaning before the prompt to prevent Crome glitch
        indexText.innerHTML = '';
        setTimeout(() => {
            //* 3.
            let promptNumber = 0;
            do {
                promptNumber++;

                const playerChoice = ( parseInt( prompt(`Inserire uno alla volta i numeri che si ricordano. ${promptNumber} di ${randomNumbers.length}`) ) );
                playerNumbers.push(playerChoice);
            }   while (promptNumber < randomNumbers.length - 1) {
                promptNumber++;

                playerNumbers.push( parseInt( prompt(`Inserire uno alla volta i numeri che si ricordano. ${promptNumber} di ${randomNumbers.length}`) ) );
            };

            //* 4.
            const rightNumbers = randomNumbers.filter(element => playerNumbers.includes(element));

            if (rightNumbers.length != 0) {
                indexText.innerHTML = `Hai ricordato ben ${rightNumbers.length} numeri ed erano: ${rightNumbers}`;
            } else {
                indexText.innerHTML = `Non hai ricordato nemmeno un numero, CAPRA! Mangia più pesce e riprova.`;
            }
        }, 100);

    },2500);

}, 1500);

/* 
*FUNCTIONS
*/

function randomNum(min, max) {
    return Math.floor( Math.random() *(max - min + 1) + min );
};