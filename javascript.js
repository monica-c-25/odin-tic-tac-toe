//Player factory function
const player = (name, mark) => {
    return {name,mark}
}

//Gameboard module 
const Gameboard = (() => {

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
    const playerOne = player('one', 'X')
    const playerTwo = player('two', 'O')

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
})();


