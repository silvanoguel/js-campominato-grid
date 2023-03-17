//**Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// Dichiarazioni
const grid = document.querySelector(".grid");
const selectLevels = document.querySelector('#levels');
const playBtn = document.querySelector('#play');

// Creo la grid
gameMode(parseInt(selectLevels.value));

playBtn.addEventListener('click', function() {
    gameMode(parseInt(selectLevels.value))
})

// Function
function gameMode(mode) {
    grid.innerHTML = ""

    let classText;

    if(mode == 100) {
        classText = "level1";
    } else if(mode == 81) {
        classText = "level2";
    } else if(mode == 49) {
        classText = "level3";
    }

    for(let i = 1; i <= mode; i++) {
        let box = document.createElement('div');
        box.classList.add(classText);
        box.classList.add('box');
        box.addEventListener('click', function() {
            if(!this.classList.contains('clicked')) {
                console.log(i);
            }
            this.classList.toggle('clicked');
        })
        grid.append(box);
    }
}