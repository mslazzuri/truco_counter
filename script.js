let wins = { team1: 0, team2: 0 };
let setCounter = 1;

function changeScore(id, delta) {
    // Get the score element by its ID
    const scoreEl = document.getElementById(id);
    let score = parseInt(scoreEl.textContent);

    // Update the score, ensuring it stays between 0 and 12
    score = Math.max(0, Math.min(12, score + delta));
    scoreEl.textContent = score;

    // Check if the score reaches 12
    if (score === 12) {
        let teamName, teamKey, winsGridId;
        if (id === 'score1') {
            wins.team1++;
            teamName = document.getElementById('teamName1').value;
            teamKey = 'team1';
            winsGridId = 'trophies1'; // Assuming wins-grid is identified by this ID
        } else {
            wins.team2++;
            teamName = document.getElementById('teamName2').value;
            teamKey = 'team2';
            winsGridId = 'trophies2'; // Assuming wins-grid is identified by this ID
        }

        // Update the wins indicator
        const winsElements = document.querySelectorAll(`#${winsGridId} .wins`);
        if (wins[teamKey] <= 2) {
            winsElements[wins[teamKey] - 1].style.backgroundColor = 'white';
        }

        // Check if the team has won 2 games
        if (wins[teamKey] === 2) {
            document.getElementById('winSound').play();
            showModal(`${teamName} wins the game!`, "Play Again", () => {
                document.getElementById('score1').textContent = 0;
                document.getElementById('score2').textContent = 0;
            });
            
            // Reset the wins indicators for both teams
            resetWins();
        
        } else {
            showModal(`${teamName} wins the set!`, "OK", () => {
                document.getElementById('score1').textContent = 0;
                document.getElementById('score2').textContent = 0;
            });
        }

        // Reset the scores after a short delay
        setTimeout(() => {
            document.getElementById('score1').textContent = 0;
            document.getElementById('score2').textContent = 0;
        }, 500);
    }
}

function resetWins() {
    // Reset the wins count
    wins.team1 = 0;
    wins.team2 = 0;

    // Reset the wins indicators for both teams
    const allWinsElements = document.querySelectorAll('.wins');
    allWinsElements.forEach(winsEl => {
        winsEl.style.backgroundColor = 'grey'; // Reset to grey
    });
}

function showModal(message, buttonText, callback) {
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalButton = document.getElementById('modalButton');

    modalMessage.textContent = message;
    modalButton.textContent = buttonText;

    modalButton.onclick = () => {
        closeModal();
        callback();
        document.getElementById('winSound').pause();
        document.getElementById('winSound').currentTime = 0;
    };

    modal.style.display = 'flex';
}

function closeModal() {
    
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        // Reset the scale when the button is pressed
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(1.05)'; // Apply the hover scale
        });

        // Reset the scale when the touch ends
        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)'; // Reset the scale
        });

        // Ensure the scale is reset if the touch is canceled
        button.addEventListener('touchcancel', () => {
            button.style.transform = 'scale(1)'; // Reset the scale
        });
    });
});

function resetScores() {
    // Reset the scores for both teams
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;

    // Reset the wins count for both teams
    wins.team1 = 0;
    wins.team2 = 0;

    // Reset the wins indicators for both teams
    const allWinsElements = document.querySelectorAll('.wins');
    allWinsElements.forEach(winsEl => {
        winsEl.style.backgroundColor = 'rgb(45, 45, 45)'; // Reset to grey
    });
}