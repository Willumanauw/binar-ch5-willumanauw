let announcement= document.getElementById("vs");

const selectionButtons = document.querySelectorAll('[data-selection]')

const hands = ["rock", "paper", "scissors"]

let computerSelection =""

selectionButtons.forEach(selectionButton => { 
    
        selectionButton.addEventListener('click', e => {
            const playerSelection = selectionButton.dataset.selection

            makeSelection(playerSelection)
            
            const idx = Math.floor(Math.random()*hands.length)
            computerSelection = hands[idx]
            comSelection()
    
            checkWinner(playerSelection, computerSelection)

            disableButton()

            changeStyle()
        })
        
})

function makeSelection(selection){
    console.log("Player : " + selection)
}

function comSelection (){
    console.log("Computer : " + computerSelection);

    document.getElementById(computerSelection).style.background = "#c4c4c4";
}

function disableButton(){
    document.getElementById("rockPlayer").disabled = true;
    document.getElementById("paperPlayer").disabled = true;
    document.getElementById("scissorsPlayer").disabled = true;

}

function changeStyle() {
    announcement.style = "color: #FFFFFF; background: #4C9654; border-radius: 10px; transform: rotate(-28.87deg); height: auto;"
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        // return 'Draw';
        announcement.innerHTML = "Draw";
        console.log("Draw");
    }

    else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            // return 'Computer';
            announcement.innerHTML = "Computer Win";
            console.log("Computer Win");
        } else {
            // return 'Player';
            announcement.innerHTML = "Player Win";
            console.log("Player Win");
        }
    }

    else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            // return 'Computer';
            announcement.innerHTML = "Computer Win";
            console.log("Computer Win")
        } else {
            // return 'Player';
            announcement.innerHTML = "Player Win";
            console.log("Player Win")
        }
    }

    else {
        if (computerSelection === 'rock'){
            // return 'Computer';
            announcement.innerHTML = "Computer Win";
            console.log("Computer Win")
        } else {
            // return 'Player';
            announcement.innerHTML = "Player Win";
            console.log("Player Win")
        }
    }

}