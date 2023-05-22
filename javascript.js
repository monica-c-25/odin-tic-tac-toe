//Player factory function
const player = (name, mark) => {
    return {name,mark}
}

//Gameboard module 
const gameBoard = (() => {

    //initial board array
    let board = ['','','','','','','','',''];
    for (let i = 0; i < board.length; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        document.getElementById('container').appendChild(box);
    }

    //event listeners for each box
    Array.from(document.getElementsByClassName('box')).forEach((box, index) => {
        box.addEventListener('click', () => {

            //add player mark
            box.innerHTML = displayController.currentPlayer.mark;

            //update board array with player mark
            board[index] = displayController.currentPlayer.mark;

            //deactivate box to prevent further marks 
            box.style.pointerEvents = 'none';

            //update spots 
            displayController.spots -= 1;

            //check if there is a winner 
            displayController.winner();

            //if there is no winner yet
            if (displayController.finalWinner === true) {
                document.getElementById('subtext').innerHTML = `${displayController.currentPlayer.name} is the Winner`; 
                let button = document.createElement('button');
                button.setAttribute('id', button);
                button.textContent = 'Play Again?'
                document.getElementById('container').append(button);
                button.addEventListener('click', displayController.reset)
                } else {
                    (displayController.finalWinner === false) 
                        if (displayController.spots > 0) {
                        displayController.nextPlayer();
                            } else {
                                displayController.tie();
                            }
            }

        })
    }
    )
    return {
        board
    }
})();



//displayController module
const displayController = (() => {

    //create players
    const playerOne = player('Player 1', 'X')
    const playerTwo = player('Player 2', 'O')

    //initial variables 
    let currentPlayer = playerOne;
    let finalWinner = false;
    let spots = 9;

    //winning combinations
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function winner() {
        winningCombos.forEach((combo, index) => {
            if ((gameBoard.board[combo[0]] === displayController.currentPlayer.mark) && (gameBoard.board[combo[1]] === displayController.currentPlayer.mark) && (gameBoard.board[combo[2]] === displayController.currentPlayer.mark)) {
                Array.from(document.getElementsByClassName('box')).forEach((box) => {
                    box.style.pointerEvents = 'none'
                });
                displayController.finalWinner = true;               
            } 
        })
    }

    function nextPlayer() {
        if (displayController.currentPlayer === playerOne) {
            displayController.currentPlayer = playerTwo;
            document.getElementById('subtext').innerHTML = "Player 2's Turn"
        } else {
            displayController.currentPlayer = playerOne;
            displayController.subtext = "Player Two's Turn";
            document.getElementById('subtext').innerHTML = "Player 1's Turn"
        }
    }

    function tie() {
        document.getElementById('subtext').innerHTML = "Nobody Wins! It's a Tie."
        let button = document.createElement('button');
        button.setAttribute('id', button);
        button.textContent = 'Play Again?'
        document.getElementById('container').append(button);
        button.addEventListener('click', displayController.reset)
    }

    function reset() {
        location.reload();
    }

    return {
        currentPlayer,
        finalWinner,
        spots,
        winner,
        nextPlayer,
        tie,
        reset,
    }
})();


