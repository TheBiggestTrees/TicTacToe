function Player(name, id, sym) {
    this.name = name,
    this.id = id,
    this.sym = sym
}

const Player1 = new Player('Tree', 1, 'X');
const Computer = new Player('Steve', 0, 'O');

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

const board = [ , 1, 0, , 1, , 0, 1, ,]

function checkBoardIndex(win) {
    let wins = win.map((pos) => {
        return finalPosition = +pos - 1; 
    });
    
    return wins;
}

function pwcCheck(currentBoard) {
    
    let gameBoardIndex = [];
    
    for ( i=0; i < currentBoard.length; i++ ){
        if ( currentBoard[i] == 1 ){
            gameBoardIndex.push( i );
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
    console.log('PlayerBoard: ' + gameBoardIndex)
    finalGameCheck(gameBoardIndex, position);
}

function finalGameCheck(gameBoardIndex, position) {
    for (i = 0; i < position.length; i++) {
        let positionChecked = position[i].toString().split(',').join('')
        let gameBoardChecked = gameBoardIndex.toString().split(',').join('')

        console.log('Checker: ' + gameBoardChecked.includes(positionChecked), position[i])
}
}
pwcCheck(board);