const tiles = document.querySelectorAll('.tile');
const board = [];
let control = false, p1_color = 'bg-red-300', p2_color = 'bg-green-300';

tiles.forEach((el)=>{
    el.addEventListener("click", (event)=> {
        value = Number(event.target.getAttribute('name'));
        if (board[value] === undefined) {
            board[value] = Number(control);
            //el.style.backgroundImage = control ? "url('../assets/images/o.png')" : "url('../assets/images/o.png')"
            control = control ? false : true;
        }
        console.log(board);
    });
    el.style.backgroundImage = "url(../images/o.png)";
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
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
    }
}