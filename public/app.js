var one = document.getElementById('TL'); //var for first button
var two = document.getElementById('TM'); //var for second button
var three = document.getElementById('TR'); //var for third button
var four = document.getElementById('ML'); //var for fourth button
var five = document.getElementById('MM'); //var for fifth button
var six = document.getElementById('MR'); //var for sixth button
var seven = document.getElementById('BL'); //var for seventh button
var eight = document.getElementById('BM'); //var for eight button
var nine = document.getElementById('BR'); //var for ninth button
var writing = document.getElementById('gameEnd'); //player turn and if the game is over goes here
var allButtons = [one, two, three, four, five, six, seven, eight, nine]; //array of all buttons
var m = 0; //helps show what letter to place (x or o)
var i = 0; //helps show what player turn it is
var labels = ['O', 'X']; //chooses what is written on board
var playerTurn = ['Turn: Player 1', 'Turn: Player 2']; //shows what player turn
var win = 0 //changes if game is over
var turns = 0 //helps with determining tie games

//checks if button has been clicked and adds ('x' or 'o') or it will alert you to pick a new location
one.addEventListener('click', pickTL);
function pickTL(){
    if (one.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if ( m == labels.length) {
        m = 0;
    }
    one.innerHTML = labels[m];
    } else {
        alert ('Pick a different location')
    }
}
//checks if button has been clicked and adds 'x' or 'o'
two.addEventListener('click', pickTM);
function pickTM(){
    if (two.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    two.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
three.addEventListener('click', pickTR);
function pickTR(){
    if (three.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    three.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
four.addEventListener('click', pickML);
function pickML(){
    if (four.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    four.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
five.addEventListener('click', pickMM);
function pickMM(){
    if (five.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    five.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
six.addEventListener('click', pickMR);
function pickMR(){
    if (six.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    six.innerHTML = labels[m];
}else {
    alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
seven.addEventListener('click', pickBL);
function pickBL(){
    if (seven.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    seven.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
eight.addEventListener('click', pickBM);
function pickBM(){
    if (eight.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    eight.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}

//checks if button has been clicked and adds 'x' or 'o'
nine.addEventListener('click', pickBR);
function pickBR(){
    if (nine.innerHTML == ''){
    i++; 
    turns++;
    m++;
    if (m == labels.length) {
        m = 0;
    }
    nine.innerHTML = labels[m];
    }else {
        alert ('Pick a different location')
    }
}


//function that makes the computer to pick at a random unplayed tile
function computerPlays() {
    var random = allButtons[Math.floor(Math.random() * allButtons.length)]; //gets a random button
        if (random.innerHTML !== ''){
            computerPlays();
        } else  {
            random.click(1);
        } 
};

//function that runs when a square is clicked to display player turn, check if game is over, and play for the computer
one.addEventListener('click', displayPlayerTurn);
two.addEventListener('click', displayPlayerTurn);
three.addEventListener('click', displayPlayerTurn);
four.addEventListener('click', displayPlayerTurn);
five.addEventListener('click', displayPlayerTurn);
six.addEventListener('click', displayPlayerTurn);
seven.addEventListener('click', displayPlayerTurn);
eight.addEventListener('click', displayPlayerTurn);
nine.addEventListener('click', displayPlayerTurn);
function displayPlayerTurn() {
    if (i == playerTurn.length){
        i = 0; //if i goes over the parameter length it goes back to player 1's turn
    }
    document.getElementById('gameEnd').innerHTML = playerTurn[i];
    isGameOver();
    while (writing.innerHTML == 'Turn: Player 2') { 
        if (win == 0){ // win !== 0 means the game is over so computer doesnt need to play
            computerPlays()
        }
    }
}


//function to check if game is over/tied if it is over then win var goes to 1
function isGameOver(){
    if (one.innerHTML === 'X'& two.innerHTML=== 'X' & three.innerHTML === 'X'){
    document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
    win = 1;
    } else if (one.innerHTML==='O'& two.innerHTML==='O'& three.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (four.innerHTML==='X' & five.innerHTML==='X' & six.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!!';
        win = 1;
    } else if (four.innerHTML==='O'& five.innerHTML==='O'& six.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (seven.innerHTML==='X'& eight.innerHTML==='X' &  nine.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (seven.innerHTML==='O'& eight.innerHTML==='O' &  nine.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (one.innerHTML ==='X'& four.innerHTML==='X' & seven.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (one.innerHTML==='O'& four.innerHTML==='O'& seven.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (two.innerHTML==='X'&five.innerHTML==='X'& eight.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (two.innerHTML==='O'&five.innerHTML==='O'& eight.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (three.innerHTML==='X'&six.innerHTML==='X'& nine.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (three.innerHTML==='O'&six.innerHTML==='O'& nine.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (one.innerHTML==='X'& five.innerHTML==='X'& nine.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (one.innerHTML==='O'& five.innerHTML==='O'& nine.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (three.innerHTML==='X' &five.innerHTML==='X'& seven.innerHTML === 'X'){
        document.getElementById('gameEnd').innerHTML = 'X wins!!! Refresh the page to start a new game';
        win = 1;
    }else if (three.innerHTML==='O' &five.innerHTML==='O'& seven.innerHTML === 'O') {
        document.getElementById('gameEnd').innerHTML = 'O Wins!!! Refresh the page to start a new game';
        win = 1;
    } else if (turns === 9){
        writing.innerHTML = 'Tie Game!!! Refresh the page to start a new game';
        win = 1;
    } else {
        console.log('game not over')
    }
}
