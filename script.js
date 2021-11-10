//*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

//*Dopo 30 secondi:
//*1-i numeri in pagina devono essere rimossi;
//*2-l’utente deve inserire, UNO ALLA VOLTA, i numeri che ha visto precedentemente, tramite il prompt().

//*Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

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
        randomNumbers.push( randomNum(1, 10) );
    }

    //Output numbers
    indexText.innerHTML = randomNumbers;

    console.log(randomNumbers);

    //Second part of the game (remember the numbers)
    setTimeout(() => {
        //* 2.
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
            console.log('I numeri del giocatore sono: ',playerNumbers);

        }, 500);

    },2500);

}, 1500);



/* 
*FUNCTIONS
*/

function randomNum(min, max) {
    return Math.floor( Math.random() *(max - min + 1) + min );
};