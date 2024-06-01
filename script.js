document.getElementById('welcome-start-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('input-screen').style.display = 'block';
});

document.getElementById('name-start-btn').addEventListener('click', function() {
    const player1Name = document.getElementById('player1-name').value;
    const player2Name = document.getElementById('player2-name').value;

    if (player1Name && player2Name) {
        document.getElementById('input-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        startGame(player1Name, player2Name);
    } else {
        alert('Please enter names for both players.');
    }
});


// =========================number guessing game start==========================//

let show = document .querySelector('.show')
let error = document .querySelector('.error')
// =====
let player_one = document .querySelector('.player_one')
let player_one_input = document .querySelector('.player_one_input')
let player_one_button = document .querySelector('.player_one_button')
let player_tow = document .querySelector('.player_tow')
let player_tow_input = document .querySelector('.player_tow_input')
let player_tow_button = document .querySelector('.player_tow_button')
// =====================player name

// Add functionality for Player 2 button click here (optional)
// You can store player names in variables and proceed to the game page
// game start

//==============palyer prat one
player_one_button.addEventListener('click' , ()=>{
    if(player_one_input.value == ''){
        error.innerHTML = 'faka raka jabe na'
    }else{
        if(player_one_input.value > 10){
            error.innerHTML = '10 er beshi deya jave na'
        }else{
            error.innerHTML = ''
            show.innerHTML = 'player - 2'
            player_one.style = 'display:none;'
            player_tow.style = 'display:block;'
        }
    }
})  
//=====================player two
player_tow_button.addEventListener('click' , ()=>{
    if(player_tow_input.value == ''){
        error.innerHTML = 'faka raka jave na baba player tow'
    }else{
     if(player_tow_input.value > 10){
        error.innerHTML = '10 er beshi kicu ekta neow'
     }else{
        error.innerHTML = ''
        if(player_tow_input.value == player_one_input.value){
            show.innerHTML = 'player 2 win'
        }else{
            show.innerHTML = 'player 1 win'
        }
     }
    }
})

 