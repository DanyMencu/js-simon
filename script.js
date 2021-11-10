//*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

//*Dopo 30 secondi:
//*1-i numeri in pagina devono essere rimossi;
//*2-l’utente deve inserire, UNO ALLA VOLTA, i numeri che ha visto precedentemente, tramite il prompt().

//*Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Ref
const indexText = document.querySelector('.text');

//Random numbers array
const randomNumbers = [];

setTimeout(() => {
    //HTML cleaning
    indexText.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        randomNumbers.push( randomNum(1, 10) );
    }

    //Output numbers
    indexText.innerHTML = randomNumbers;

    console.log(randomNumbers);
}, 2000)




/* 
*FUNCTIONS
*/

function randomNum(min, max) {
    return Math.floor( Math.random() *(max - min + 1) + min );
};