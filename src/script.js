function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;

    return { playerName, playerMarker };
}

function gameboard() {
    const board = ['','','','','','','','','']
    const emptySlots = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    const player = createPlayer("Steve", 'X');
    const opponent = createPlayer("Arnold", "O");

    for (i = 0; i < board.length; i++) {
        const index = i;
        const boardBox = document.getElementById(i);
        boardBox.addEventListener('click', () => {
            addPlayerMarker(player.playerMarker, opponent.playerMarker, board, index, emptySlots);             
        })
    }
}

function randomNum(emptySlots) {
    const rand = Math.floor(Math.random() * emptySlots.length);
    return rand;
}

function addOpponentMarker(opponentMarker, board, emptySlots) {
    const randNum = randomNum(emptySlots);
    const opponentIndex = Number(emptySlots[randNum]);
    board[opponentIndex] = opponentMarker;
    emptySlots.splice(randNum, 1);
}

function addPlayerMarker(playerMarker, opponentMarker, board, index, emptySlots) {
    if(!board[index]){
        const boardIndex = index;
        board[boardIndex] = playerMarker
        emptySlots.splice(emptySlots.indexOf(boardIndex.toString()), 1);
        addOpponentMarker(opponentMarker, board, emptySlots)
        displayGameBoard(board);    
        } else if(board[index] == opponentMarker || board[index] == playerMarker) {
            console.log('try a new spot')
    } 
}

function displayGameBoard(board) {
    for (i = 0; i < board.length; i++) {
        let gridSlot = document.getElementById(i);
        gridSlot.innerHTML = board[i]
    }
}

gameboard();