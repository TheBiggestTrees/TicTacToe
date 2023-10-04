function Player(name, id, sym) {
    this.name = name,
    this.id = id,
    this.sym = sym
}

const Player1 = new Player('Tree', 1, 'X');
const Computer = new Player('Steve', 0, 'O');

let pagePosition = [
    document.getElementById(0),
    document.getElementById(1),
    document.getElementById(2),
    document.getElementById(3),
    document.getElementById(4),
    document.getElementById(5),
    document.getElementById(6),
    document.getElementById(7),
    document.getElementById(8),
]

pagePosition[0].addEventListener("click", () => {
    if (!board[0]) {
        pagePosition[0].innerHTML = Player1.sym;
        board.splice(0, 1, Player1.id);
        addOpponentNumber();
    } else if (board[0] == 1 || board[0] == 2){
        addOpponentNumber();
    } 

});

pagePosition[1].addEventListener("click", () => {
    if (!board[1]) {
        pagePosition[1].innerHTML = Player1.sym;
        board.splice(1, 1, Player1.id);
        addOpponentNumber();
    } else if (board[1] == 1 || board[1] == 2){
        addOpponentNumber();
    } 

});

pagePosition[2].addEventListener("click", () => {
    if (!board[2]) {
        pagePosition[2].innerHTML = Player1.sym;
        board.splice(2, 1, Player1.id);
        addOpponentNumber();
    } else if (board[2] == 1 || board[2] == 2){
        addOpponentNumber();
    } 

});

pagePosition[3].addEventListener("click", () => {
    if (!board[3]) {
        pagePosition[3].innerHTML = Player1.sym;
        board.splice(3, 1, Player1.id);
        addOpponentNumber();
    } else if (board[3] == 1 || board[3] == 2){
        addOpponentNumber();
    } 

});

pagePosition[4].addEventListener("click", () => {
    if (!board[4]) {
        pagePosition[4].innerHTML = Player1.sym;
        board.splice(4, 1, Player1.id);
        addOpponentNumber();
    } else if (board[4] == 1 || board[4] == 2){
        addOpponentNumber();
    } 

});

pagePosition[5].addEventListener("click", () => {
    if (!board[5]) {
        pagePosition[5].innerHTML = Player1.sym;
        board.splice(5, 1, Player1.id);
        addOpponentNumber();
    } else if (board[5] == 1 || board[5] == 2){
        addOpponentNumber();
    } 

});

pagePosition[6].addEventListener("click", () => {
    if (!board[6]) {
        pagePosition[6].innerHTML = Player1.sym;
        board.splice(6, 1, Player1.id);
        addOpponentNumber();
    } else if (board[6] == 1 || board[6] == 2){
        addOpponentNumber();
    } 

});

pagePosition[7].addEventListener("click", () => {
    if (!board[7]) {
        pagePosition[7].innerHTML = Player1.sym;
        board.splice(7, 1, Player1.id);
        addOpponentNumber();
    } else if (board[7] == 1 || board[7] == 2){
        addOpponentNumber();
    } 

});

pagePosition[8].addEventListener("click", () => {
    if (!board[8]) {
        pagePosition[8].innerHTML = Player1.sym;
        board.splice(8, 1, Player1.id);
        addOpponentNumber();
    } else if (board[8] == 1 || board[8] == 2){
        addOpponentNumber();
    } 

});

document.addEventListener("click", () => {
    console.log(board)

    pwcCheck(board);
})

let pwc = [
    [1, , , 1, , , 1, , ,], // win along first column
    [ , 1, , , 1, , , 1, ,], // win along second column
    [ , , 1, , , 1, , , 1], // win along third column
    [1, , , , 1, , , , 1], // win diagonally from tLeft to bRight
    [ , , 1, , 1, , 1, , ,], // win diagonally from tRight to bLeft
    [1, 1, 1, , , , , , ,], // win along top row
    [ , , , 1, 1, 1, , , ,], // win along middle row
    [ , , , , , , 1, 1, 1], // win along bottom row
]

let board = [ , , , , , , , , ,]

function addOpponentNumber(num) {

    let randomNumInd = Math.floor(Math.random() * board.length);

    // if (board[randomNumInd] == 1 || board [randomNumInd] == 2) {

    // }


    if (!board[randomNumInd]) {
        board.splice(randomNumInd, 1, 2);
        pagePosition[randomNumInd].innerHTML = Computer.sym;
    } else if (board[randomNumInd] == 1 || board[randomNumInd] == 2){
        let newRandNumInd = Math.floor(Math.random() * board.length );
        if (!board[newRandNumInd]) {
            board.splice(newRandNumInd, 1, 2);
            pagePosition[newRandNumInd].innerHTML = Computer.sym;
        }
    }



}

// function checkBoardIndex(win) {
//     let wins = win.map((pos) => {
//         return finalPosition = +pos - 1; 
//     });
    
//     return wins;
// }

function pwcCheck(currentBoard) {
    
    let gameBoardXIndex = [];
    let gameBoardYIndex = [];

    for ( i=0; i < currentBoard.length; i++ ){
        if ( currentBoard[i] == 1 ){
            gameBoardXIndex.push( i );
        }
    }      
    
    for ( i=0; i < currentBoard.length; i++ ){
        if ( currentBoard[i] == 2 ){
            gameBoardYIndex.push( i );
        }
    }      
    
    let position = pwc.map((pos) => {
    let possibleWins = [];
        for ( i=0; i < pos.length; i++ ){
            if ( pos[i] == 1 ){
                possibleWins.push( i );
            }
        }
        return possibleWins;
    }) 

    console.log('PlayerXBoard: ' + gameBoardXIndex);
    console.log('PlayerYBoard: ' + gameBoardYIndex);

    finalGameCheck(gameBoardXIndex, gameBoardYIndex, position);
}

function finalGameCheck(gameBoardXIndex, gameBoardYIndex, position) {
    for (i = 0; i < position.length; i++) {
        let positionXChecked = position[i].toString().split(',').join('');
        let gameBoardXChecked = gameBoardXIndex.toString().split(',').join('');

        console.log('Checker: X = ' + gameBoardXChecked.includes(positionXChecked), position[i]);
        console.log(gameBoardXChecked);

        if (gameBoardXChecked.includes(positionXChecked) === true) {
            pagePosition[0].innerHTML = 'Y';
            pagePosition[1].innerHTML = 'O';
            pagePosition[2].innerHTML = 'U';
            pagePosition[3].innerHTML = '';
            pagePosition[4].innerHTML = '';
            pagePosition[5].innerHTML = '';
            pagePosition[6].innerHTML = 'W';
            pagePosition[7].innerHTML = 'I';
            pagePosition[8].innerHTML = 'N';
        }
    }

    for (i = 0; i < position.length; i++) {
        let positionYChecked = position[i].toString().split(',').join('');
        let gameBoardYChecked = gameBoardYIndex.toString().split(',').join('');

        console.log('Checker: Y = ' + gameBoardYChecked.includes(positionYChecked), position[i]);
        console.log(gameBoardYChecked);
    }   

}
