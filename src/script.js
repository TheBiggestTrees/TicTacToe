//method could be better just needed it globablly for the gameStart to call the gameboard... 
let playerSelection;

//gets called by Start Game btn to hide playerSelect menu and show gameGrid
function gameStart() {
    const playerName = document.getElementById('name').value;
    const gameGrid = document.querySelector('.grid');
    const playerSelect = document.querySelector('.playerSelect');
    

    playerSelect.classList = 'playerSelect hidden';
    gameGrid.classList = 'grid';

    gameboard(playerName, playerSelection);
}

//gets called by start btn to hide mainMenu and show playerSelect menu
function beginGame() {
    const mainMenu = document.querySelector('.mainMenu');
    const playerSelect = document.querySelector('.playerSelect');
    
    mainMenu.classList = 'mainMenu hidden';
    playerSelect.classList = 'playerSelect';

    const xBtn = document.getElementById('X');
    const yBtn = document.getElementById('O');

    xBtn.addEventListener('click', () => {
        playerSelection = xBtn.value;
        xBtn.classList = 'markers selected';
        yBtn.classList = 'markers';
        console.log(playerSelection);
    })

    yBtn.addEventListener('click', () => {
        playerSelection = yBtn.value;
        yBtn.classList = 'markers selected';
        xBtn.classList = 'markers';
        console.log(playerSelection);

    })
}

//Sets game up after menus
function gameboard(playerName, playerSelectedMarker) {
 
    //creates objects for players && opponents
    function createPlayer(name, marker) {
        const playerName = name;
        const playerMarker = marker;
    
        return { playerName, playerMarker };
    }

    //variables setup for game
    const board = ['','','','','','','','','']
    const emptySlots = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    const winningBoards = [ '036', '147', '258', '012', '345', '678', '048', '246'];
    const player = createPlayer(playerName, playerSelectedMarker);
    let opponent;
    
    //checks for player's marker decision
    if (player.playerMarker == "X") {
        opponent = createPlayer("Arnold", "O");
    } else {
        opponent = createPlayer("Arnold", "X");
    }

    //assigns event listeners to each position in the boardBox to allow player input.
    for (i = 0; i < board.length; i++) {
        const index = i;
        const boardBox = document.getElementById(i);
        boardBox.addEventListener('click', () => {
            addMarkers(player.playerMarker, opponent.playerMarker, board, index, emptySlots, winningBoards);             
        })
    }
    
}



//Handles adding markers to the board and removing emptySlots from the array.
function addMarkers(playerMarker, opponentMarker, board, index, emptySlots) {    
    
    //Generates a random number to select a spot and adds the opponent marker to the board and removes that index from the emptySlots array.
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

    //Displays game status
    function displayGameBoard(board) {
        for (i = 0; i < board.length; i++) {
            let gridSlot = document.getElementById(i);
            gridSlot.innerHTML = board[i];
        }
    }
    
    //Checks if player selected spot is filled and adds the player marker to the board and removes that index from the emptySlots array
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

