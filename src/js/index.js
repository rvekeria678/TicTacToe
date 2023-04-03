const tiles = document.querySelectorAll('.tile');
const reset = document.querySelector('#reset');
const game_msg = document.querySelector("#game-msg");
const board = [];
let control = false, playing = true, p1_color = 'bg-red-300', p2_color = 'bg-green-300';

tiles.forEach((el)=>{
    el.addEventListener("click", (event)=> {
        value = Number(event.target.getAttribute('name'));
        if (board[value] === undefined && playing) {
            board[value] = Number(control);
            el.style.backgroundImage = control ? "url(./src/images/o.png)" : "url(./src/images/x2.webp)";
            el.style.backgroundSize = '100% 100%';
            control = control ? false : true;
        }
        checkBoardState(value);
    });
});

reset.addEventListener('click', (event)=> {
    tiles.forEach(el => {
        el.style.backgroundImage = "";
    });
    board.length = 0;
    game_msg.innerText = "";
    playing = true;
});

function checkBoardState(e_val) {
    switch(e_val) {
        case 0:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[0] === board[3] && board[0] === board[6]) ||
                (board[0] === board[4] && board[0] === board[8])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 1:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[1] === board[4] && board[1] === board[7])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 2:
            if ((board[0] === board[1] && board[0] === board[2]) ||
                (board[2] === board[5] && board[2] === board[8]) ||
                (board[2] === board[4] && board[2] === board[7])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 3:
            if ((board[0] === board[3] && board[0] === board[6]) ||
                (board[3] === board[4] && board[3] === board[5])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 4:
            if ((board[4] === board[3] && board[4] === board[5]) ||
                (board[4] === board[1] && board[4] === board[7]) ||
                (board[4] === board[2] && board[4] === board[6]) ||
                (board[4] === board[0] && board[4] === board[8])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 5:
            if ((board[5] === board[2] && board[5] === board[8]) ||
                (board[5] === board[3] && board[5] === board[4])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 6:
            if ((board[6] === board[7] && board[6] === board[8]) ||
                (board[6] === board[4] && board[6] === board[2]) ||
                (board[6] === board[3] && board[6] === board[0])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 7:
            if ((board[7] === board[6] && board[7] === board[8]) ||
                (board[7] === board[4] && board[7] === board[1])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
        case 8:
            if ((board[8] === board[7] && board[8] === board[6]) ||
                (board[8] === board[2] && board[8] === board[5]) ||
                (board[8] === board[4] && board[8] === board[0])) {
                game_msg.innerText = control ? "Player 1 Won!" : "Player 2 Won!";
                playing = false;
            }
            break;
    }
    console.log(board);
}