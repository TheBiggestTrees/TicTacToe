function Player(name, id, sym) {
    this.name = name,
    this.id = id,
    this.sym = sym
}

const Player1 = new Player('Tree', 1, 'X');
const Computer = new Player('Steve', 0, 'O');

let pagePosition = {
    pos0: document.getElementById(0),
    pos1: document.getElementById(1),
    pos2: document.getElementById(2),
    pos3: document.getElementById(3),
    pos4: document.getElementById(4),
    pos5: document.getElementById(5),
    pos6: document.getElementById(6),
    pos7: document.getElementById(7),
    pos8: document.getElementById(8),
}

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

let board = [ 1, , 1, 1, 1, , 2, 2, 2,]

function addOpponentNumber() {

    let boardCheck = [, , , , , , , , ,]
    let randomNumInd = Math.floor(Math.random() * board.length);

    if (!boardCheck[randomNumInd]) {
        boardCheck.splice(randomNumInd, 1, 2);
        console.log(boardCheck)
    } else {
        console.log("Filled, ", randomNumInd);
    }

}

function checkBoardIndex(win) {
    let wins = win.map((pos) => {
        return finalPosition = +pos - 1; 
    });
    
    return wins;
}

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
    }

    for (i = 0; i < position.length; i++) {
        let positionYChecked = position[i].toString().split(',').join('');
        let gameBoardYChecked = gameBoardYIndex.toString().split(',').join('');

        console.log('Checker: Y = ' + gameBoardYChecked.includes(positionYChecked), position[i]);
        console.log(gameBoardYChecked);
    }   
}

pwcCheck(board);
