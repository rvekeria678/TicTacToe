const tiles = document.querySelectorAll('.tile');
const reset = document.querySelector('#reset');
const game_msg = document.querySelector("#game-msg");
const board = [];
let control = false, p1_color = 'bg-red-300', p2_color = 'bg-green-300';

tiles.forEach((el)=>{
    el.addEventListener("click", (event)=> {
        value = Number(event.target.getAttribute('name'));
        if (board[value] === undefined) {
            board[value] = Number(control);
            el.style.backgroundImage = control ? "url(./src/images/o.png)" : "url(./src/images/x2.webp)";
            el.style.backgroundSize = '100% 100%';
            control = control ? false : true;
        }
        console.log(board);
        checkBoardState(value);
    });
});

reset.addEventListener('click', (event)=> {
    tiles.forEach(el => {
        el.style.backgroundImage = "";
    });
    board.length = 0;
    game_msg.innerText = "";
});

function checkBoardState(e_val) {
    switch(e_val) {
        case 0:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[0] === board[3] && board[0] === board[6]) ||
                (board[0] === board[4] && board[0] === board[8])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 1:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[1] === board[4] && board[1] === board[7])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 2:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[2] === board[5] && board[2] === board[8]) ||
                (board[2] === board[4] && board[2] === board[7])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 3:
            if ((board[0] === board[3] && board[0] === board[6]) ||
                (board[3] === board[4] && board[3] === board[5])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 4:
            if ((board[4] === board[3] && board[4] === board[5]) ||
                (board[4] === board[1] && board[4] === board[7]) ||
                (board[4] === board[2] && board[4] === board[6]) ||
                (board[4] === board[0] && board[4] === board[8])) {
                console.log(control ? "Player 1 won!" : "Player 2 won!");
            }
            break;
        case 5:
            if ((board[5] === board[2] && board[5] === board[8]) ||
                (board[5] === board[3] && board[5] === board[4])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 6:
            if ((board[6] === board[7] && board[6] === board[8]) ||
                (board[6] === board[4] && board[6] === board[2]) ||
                (board[6] === board[3] && board[6] === board[0])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 7:
            if ((board[7] === board[6] && board[7] === board[8]) ||
                (board[7] === board[4] && board[7] === board[1])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
        case 8:
            if ((board[8] === board[7] && board[8] === board[6]) ||
                (board[8] === board[2] && board[8] === board[5]) ||
                (board[8] === board[4] && board[8] === board[0])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
            }
            break;
    }
}