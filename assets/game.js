        let sequenceValues = [];
        let currentIndex = 0;
        let score = 0;
        let waitingForCorrectAnswer = false;

        function fetchSequence() {
            fetch('https://run.textvisualization.app/game/sequence.csv')
                .then(response => response.text())
                .then(data => {
                    const rows = data.trim().split('\n').slice(1);
                    sequenceValues = rows.map(row => {
                        const cols = row.split(',');
                        return parseFloat(cols[cols.length - 1]); // Ensure we get the last column (sequence_value)
                    });
                    currentIndex = 0;
                    score = 0;
                    waitingForCorrectAnswer = false;
                    updateScore();
                    displaySequence();
                })
                .catch(error => console.error("Error fetching sequence:", error));
        }
        
        function displaySequence() {
            const sequenceContainer = document.getElementById("sequence");
            sequenceContainer.innerHTML = "";
            document.getElementById("choices").style.display = "none";
            document.getElementById("feedback").innerText = "";

            let valuesToShow = sequenceValues.slice(currentIndex, currentIndex + 12);
            valuesToShow.forEach(value => {
                const square = document.createElement("div");
                square.classList.add("square");
                if (value === 0) square.classList.add("black");
                else if (value === 0.5) square.classList.add("silver");
                else if (value === 1) square.classList.add("golden");
                sequenceContainer.appendChild(square);
            });

            if (currentIndex + 12 < sequenceValues.length) {
                document.getElementById("choices").style.display = "block";
                waitingForCorrectAnswer = true;
            }
        }
        
        function checkGuess(guess) {
            if (!waitingForCorrectAnswer) return;
            
            const actualValue = sequenceValues[currentIndex + 12];
            if (guess === actualValue) {
                score++;
                document.getElementById("feedback").innerText = "Correct! Loading next sequence...";
                waitingForCorrectAnswer = false;
                currentIndex++;
                setTimeout(displaySequence, 1000);
            } else {
                score--;
                document.getElementById("feedback").innerText = "Incorrect. Try again!";
            }
            updateScore();
        }

        function updateScore() {
            document.getElementById("score").innerText = "Score: " + score;
        }
