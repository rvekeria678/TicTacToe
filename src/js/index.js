const tiles = document.querySelectorAll('.tile');
const board = [];
let control = false, p1_color = 'bg-red-300', p2_color = 'bg-green-300';

tiles.forEach((el)=>{
    el.addEventListener("click", (event)=> {
        value = Number(event.target.getAttribute('name'));
        if (board[value] == undefined) {
            board[value] = Number(control);
            el.classList.add(control ? p1_color : p2_color);
        }
        console.log(board);
        control = control ? false : true;
    });
});

function checkBoardState(e_val) {
    switch(e_val) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
    }
}