
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



// al click bisogna creare n div.square in base al livello di difficoltà selezionato dall'utente
playBtn.addEventListener('click', function() {
    //reset del contenuto di wrap_grid
    wrapGrid.innerHTML = '';
    // ottenimento del valore di difficoltà
    const size = selector.value;
    switch (size) {
        case '1':
            totSquares = 100;
            rowSquares = 10;
            break;

        case '2':
            totSquares = 81;
            rowSquares = 9;
            break;

        case '3':
            totSquares = 49;
            rowSquares = 7;
    }
    // creazione dei div in base al livello di difficoltà
    const square = createSquare(totSquares, rowSquares);

    // generare 16 numeri casuali e inserirli nell'array se non presenti
    const maxBombs = 16;
    const bombList = bombs(maxBombs, totSquares);
});









/*Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri delle bombe?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
*/


























// funzioni
function createSquare(num, rowSquares) {

    for (i = 1; i <= num; i++) {
        //creazione dell'elemento
        const square = document.createElement('div');
        // aggiunta della classe square
        square.classList.add('square');
        // all'interno inseriamo il numero di index
        square.append(i);
        // inseriamo le dimensioni di ogni singola cella
        square.style.width = `calc(100% / ${rowSquares})`;
        square.style.height = `calc(100% / ${rowSquares})`;
        //inseriamo il listener al click
        square.addEventListener('click', function() {
            //aggiungiamo la classe active alle celle al click
            square.classList.add('active');
        });
            //inserire la cella creata nella griglia
            wrapGrid.append(square);
    }
return createSquare;
}

function bombs(maxlength, nmax) {
// creare un array fantasma che mi tenga traccia dei numeri creati
// finché il numero di elementi nell'array non coincide con il numero di bombe di cui ho bisogno (16)
// generare numeri random
// controllare che siano presenti nell'array fantasma
// no? inserisci il numero
// si? ricomincia il ciclo fino a ch la condizione del while non è corretta
// return la lista, che verrà usata come lista di caselle in cui sarà presente la bomba
    let bombs = [];
    while (bombs.length != maxlength - 1) {
        let n = getRangeRand(1, nmax);
        if (!bombs.includes(n)) {
            bombs.push(n);
        }
    }

    return bombs;
}

function getRangeRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}