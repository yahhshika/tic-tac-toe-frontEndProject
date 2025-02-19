console.log('welcome to ttt');
let turnAudio = new Audio("MouseClick.wav");
let gameover = new Audio("GameOverr.wav");
let transition = new Audio("Transition.wav");
let turn = "X";
let changeturn = () => {
    return turn === 'X' ? 'O' : 'X';
}
// let player1 = prompt("Player 1:");
// let player2 = prompt("Player 2:");
let isgameover = false;
function checkWin() {
    let inside = document.getElementsByClassName('inside');
    let a = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    Array.from(a).forEach(e => {
        if ((inside[e[0]].innerText === inside[e[1]].innerText) && (inside[e[0]].innerText === inside[e[2]].innerText) && inside[e[0]].innerText !== "") {
            isgameover = true;
            document.querySelector('.infoinside').innerText = inside[e[0]].innerText + " Won!!!";
            document.getElementsByTagName('img')[0].style.width = "189px";
            gameover.play();
        }

    })


}
let boxes = document.getElementsByClassName('part');
// Array.from(boxes).forEach(e => {
//     console.log(e);

// })
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector('.inside');
    e.addEventListener('click', () => {

        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn;
            // console.log(turn);
            console.log(typeof turn);
            turn = changeturn();
            turnAudio.play();
            checkWin();
            if (isgameover === false) {
                
                document.querySelector('.infoinside').innerText = "Turn for " + turn;

            }
            
        }
        
    })



});

document.querySelector('.reset').addEventListener('click',()=>{
    isgameover = false;
    let insides = document.getElementsByClassName('inside');
    Array.from(insides).forEach(e =>{
        e.innerText = "";
        
    })
    document.querySelector('.infoinside').innerText = "Turn for X";
    turn = 'X';
    document.getElementsByTagName('img')[0].style.width = "0px";
    gameover.pause();
    transition.play();

})



