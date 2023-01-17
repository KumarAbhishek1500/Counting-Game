const pl1btn = document.querySelector('#pl1btn');
const pl2btn = document.querySelector('#pl2btn');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('button[type="reset"]')
const rounds = document.querySelector('#playupto')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isgameover = false;

pl1btn.addEventListener('click', () => {
    if (!isgameover) {
        p1score += 1;
        if (p1score === winningScore) {
            isgameover = true;
            player1.classList.add('has-text-success');
            player2.classList.add('has-text-danger');
            pl1btn.disabled = true;
            pl2btn.disabled = true;
        }
        player1.innerText = p1score;
    }
})


pl2btn.addEventListener('click', () => {
    if (!isgameover) {
        p2score += 1;
        if (p2score === winningScore) {
            isgameover = true;
            player2.classList.add('has-text-success');
            player1.classList.add('has-text-danger');
            pl1btn.disabled = true;
            pl2btn.disabled = true;
        }
        player2.innerText = p2score;
    }
})

reset.addEventListener('click',resetScore);

rounds.addEventListener('change',()=>{
    winningScore = Number(rounds.value);
    resetScore();
})

function resetScore () {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    player1.innerText = 0;
    player2.innerText = 0;
    player1.classList.remove('has-text-success','has-text-danger');
    player2.classList.remove('has-text-danger','has-text-success');
    pl1btn.disabled = false;
    pl2btn.disabled = false;
}