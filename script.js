// creating the required variables needed  in the code
let secretNumber = Number(Math.trunc(Math.random()*20) + 1);
let score = 20;
let highscore = 0;

// Creating a function that will take arguemtns from the inner code
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Creating a check button function
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('❌ No Number Entered ❌')
    }
    else if(guess === secretNumber){
        displayMessage('🎉 You Entered the Correct Number 🎉')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? '⬇️ Decrease the Number ⬇️' : '⬆️ Increase the Number ⬆️');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('㊗️ You Lost the Game, Try Again!! ㊙️')
        }
    }
}) 

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Number(Math.trunc(Math.random() * 20) +1 );
    displayMessage('💮 Start Guessing...')

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
})