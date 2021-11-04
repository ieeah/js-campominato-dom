
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


// al click bisogna creare n div.square in base al livello di difficoltà selezionato dall'utente
playBtn.addEventListener('click', function() {
    wrapGrid.innerHTML = '';
    let totSquares = 0;
    let rowSquares = 0;
    const maxBombs = 16;
    const attempts = [];
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
    let maxAttempts = totSquares - maxBombs;
    const bombList = bombs(maxBombs, totSquares);
    // per totSquares volte
    for (let i = 1; i < totSquares + 1; i++) {
        const grid = createSquare(i, rowSquares, bombList, maxAttempts, attempts, totSquares);
        wrapGrid.append(grid);
    }
});



// FUNZIONI
function createSquare(i, rowSquares, listabombe, maxAttempts, attempts, totSquares) {
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
            handleSquareClick(square, listabombe, attempts, maxAttempts, rowSquares)
    });
return square;
}

function bombs(maxBombs, totSquares) {
    let bombs = [];
    while (bombs.length <= maxBombs - 1) {
        let n = getRangeRand(1, totSquares);
        if (!bombs.includes(n)) {
            bombs.push(n);
        }
    }
    return bombs;
}

function getRangeRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleSquareClick(square, bombList, attempts, maxAttempts, rowSquares) {
    // ottenimento valore cella
    const squareValue = parseInt(square.innerText);
    //controllare che la cella cliccata sia una bomba o meno
    if (bombList.includes(squareValue)) {
        // se è una bomba
        square.classList.add('bomb');
        // messaggio sconfitta
        wrapGrid.innerHTML += `<h1>Che peccato! hai cliccato sulla cella ${square.innerText}, che purtroppo era una bomba!</h1>`;
        // rendere tutte le bombe rosse
        explodedBombs(bombList, rowSquares);
    } else {
        square.classList.add('active');
        attempts.push(squareValue);
    }

    if (attempts.length === maxAttempts) {
        wrapGrid.innerHTML += `<h1>Congratulazioni! Sei riuscito a trovare tutte le ${maxAttempts} celle libere dalle bombe!</h1>`;
        explodedBombs(bombList, rowSquares);
    }
}

function explodedBombs(bombList, rowSquares) {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        const squareValue = parseInt(square.innerText);
        square.style = 'pointer-events: none';
        square.style = 'cursor: default';
        square.style.width = `calc(100% / ${rowSquares})`;
        square.style.height = `calc(100% / ${rowSquares})`;
        if (bombList.includes(squareValue)) {
            square.classList.add('bomb');
        }
    }

}