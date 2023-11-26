function gameStart() {
    const playerName = document.getElementById('name').value;
    const marker = document.querySelector('input[name="marker"]:checked').value;
    const gameGrid = document.querySelector('.grid');
    const playerSelect = document.querySelector('.playerSelect');

    playerSelect.classList = 'playerSelect hidden';
    gameGrid.classList = 'grid';

    gameboard(playerName, marker);
}

function beginGame() {
    
    const mainMenu = document.querySelector('.mainMenu');
    const playerSelect = document.querySelector('.playerSelect');
    
    mainMenu.classList = 'mainMenu hidden';
    playerSelect.classList = 'playerSelect';

}

function gameboard(playerName, playerSelectedMarker) {
 
    function createPlayer(name, marker) {
        const playerName = name;
        const playerMarker = marker;
    
        return { playerName, playerMarker };
    }

    const board = ['','','','','','','','','']
    const emptySlots = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    const player = createPlayer(playerName, playerSelectedMarker);
    let opponent;
    
    if (player.playerMarker == "X") {
        opponent = createPlayer("Arnold", "O");
    } else {
        opponent = createPlayer("Arnold", "X");
    }

    for (i = 0; i < board.length; i++) {
        const index = i;
        const boardBox = document.getElementById(i);
        boardBox.addEventListener('click', () => {
            addPlayerMarker(player.playerMarker, opponent.playerMarker, board, index, emptySlots);             
        })
    }
    
}

function addPlayerMarker(playerMarker, opponentMarker, board, index, emptySlots) {
    
    function addOpponentMarker(opponentMarker, board, emptySlots) {
        function randomNum(emptySlots) {
            const rand = Math.floor(Math.random() * emptySlots.length);
            return rand;
        }
        const randNum = randomNum(emptySlots);
        const opponentIndex = Number(emptySlots[randNum]);
        board[opponentIndex] = opponentMarker;
        emptySlots.splice(randNum, 1);
    }

    function displayGameBoard(board) {
        for (i = 0; i < board.length; i++) {
            let gridSlot = document.getElementById(i);
            gridSlot.innerHTML = board[i];
        }
    }
    
    if(!board[index]){
        const boardIndex = index;
        board[boardIndex] = playerMarker;
        emptySlots.splice(emptySlots.indexOf(boardIndex.toString()), 1);
        addOpponentMarker(opponentMarker, board, emptySlots);
        displayGameBoard(board);    
        } else if(board[index] == opponentMarker || board[index] == playerMarker) {
            console.log('try a new spot');
    } 
}

