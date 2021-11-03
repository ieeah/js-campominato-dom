
// L'utente indica un livello di difficoltà con il selettore
// al click sul #play_btn viene generata una griglia
// le dimensioni della griglia sono date dal livello di difficoltà selezionato dall'utente secondo la seguente tabella

// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// ogni quadratino che compone la griglia, avrà un numero generato in modo sequenziale
// ogni volta che si clicca su una singolo quadratino, il bgcolor diventerà azzurro

// esecuzione esercizio

// references to the DOM elements we will interact with
const playBtn = document.getElementById('play_btn');
const selector = document.getElementById('level');
const main = document.querySelector('main');
const wrapGrid = document.querySelector('.wrap_grid');

//variables
let totSquares = 0;
let rowSquares = 0;


























































// playBtn.addEventListener('click', function() {
//     // al click del playbtn si azzera il contenuto di wrapGrid
//     wrapGrid.innerHTML = '';

// // ottenere il livello selezionato
//     const size = selector.value;

// // in base al livello, impostare il numero di celle totali
// // ed il numero di celle per ogni singola riga
//     switch (size) {
//         case '1':
//             totSquares = 100;
//             rowSquares = 10;
//             break;
        
//         case '2':
//             totSquares = 81;
//             rowSquares = 9;
//             break;

//         case '3':
//             totSquares = 49;
//             rowSquares = 7;

//     }

// // creare n elementi div con classe square, in base al numero di celle totali
//     createSquares(totSquares);

// });

// // funzioni

// function createSquares(num) {
//     // creare n elementi div con classe square, in base al numero di celle totali
//     for (i = 1; i <= num; i++) {
//         const createSquare = document.createElement('div');
//         createSquare.classList.add('square');
//         // ad ogni elemento assegnare un numero, creato sequenzialmente
//         createSquare.append(i);
//         // impostare le dimensioni di ogni singola cella
//         createSquare.style.width = `calc(100% / ${rowSquares})`;
//         createSquare.style.height = `calc(100% / ${rowSquares})`;
//         // creare un eventlistener, che al click cambi il colore di sfondo dell'elemento cliccato
//         createSquare.addEventListener('click', function() {
//         createSquare.classList.add('active');
//         });
//         // inserire la cella nel wrapGrid
//         wrapGrid.append(createSquare);
//     }
// }