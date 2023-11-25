function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;

    return { playerName, playerMarker };
}

function gameboard() {
    const board = ['','','','','','','','','']
    const player = createPlayer("Steve", 'X');
    const opponent = createPlayer("Arnold", "O");

    for (i = 0; i < board.length; i++) {
        const index = i;
        document.getElementById(i).addEventListener('click', () => {
            console.log(index);
            addPlayerMarker(player.playerMarker, opponent.playerMarker, board, index);
            addOpponentMarker(opponent.playerMarker, board, player.playerMarker);
        }

        )
    }
    
    return {
        board,
        player,
        opponent,        
    }
}

function addOpponentMarker(opponentMarker, board, playerMarker) {
    const random = Math.floor(Math.random() * 9);
    
}

function addPlayerMarker(playerMarker, opponentMarker, board, index) {
    if(!board[index]){
        console.log(playerMarker);
        board[index] = playerMarker;

        } else if(board[index] == opponentMarker || board[index] == playerMarker) {
            console.log('try a new spot')
            console.log(board);
    } 
    console.log(board)
}

gameboard();