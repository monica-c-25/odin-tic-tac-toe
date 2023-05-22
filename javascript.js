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

})();



const playerOne = player('one', 'X')
const playerTwo = player('two', 'O')

