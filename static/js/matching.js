document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".memory-card");
    const scoreElement = document.getElementById("score");
    const movesElement = document.getElementById("moves");
    const messageElement = document.getElementById("game-message");
    const gameBoard = document.getElementById("game-board");
    const patientId = Number(gameBoard.dataset.patientId);
    const difficulty = Number(gameBoard.dataset.difficulty);

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;
    let score = 0;
    let matchedPairs = 0;
        const cardArray = Array.from(cards);

    cardArray.sort(() => Math.random() - 0.5);

    cardArray.forEach(card => {
        gameBoard.appendChild(card);
    });

    cards.forEach(card => {

        card.addEventListener("click", function () {

            if (lockBoard || card === firstCard ||
                card.classList.contains("matched")) {
                return;
            }

            card.classList.add("flipped");

            if (!firstCard) {
                firstCard = card;
                return;
            }

            secondCard = card;
            moves++;

            movesElement.textContent = moves;

            if (firstCard.dataset.card === secondCard.dataset.card) {

                firstCard.classList.add("matched");
                secondCard.classList.add("matched");

                score += 10;
                matchedPairs++;

                scoreElement.textContent = score;
              resetCards();

                if (matchedPairs === cards.length / 2) {
                    messageElement.textContent =
                        "🎉 Well done! You matched all the cards!";
                    showCelebration();
                    submitScore();
                }

            } else {

                lockBoard = true;

                setTimeout(() => {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");

                    resetCards();
                }, 900);
            }
        });
    });

    function resetCards() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

    async function submitScore() {
        try {
            const response = await fetch("/api/score", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    patient_id: patientId,
                    game_type: "matching",
                    difficulty: difficulty,
                    score: matchedPairs,
                    total: cards.length / 2
                })
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Unable to save your score.");
            }

            messageElement.textContent +=
                ` Next difficulty: ${result.next_difficulty}.`;
        } catch (error) {
            console.error(error);
            messageElement.textContent +=
                " Your score could not be saved.";
        }
    }

    function showCelebration() {
        const celebration = document.getElementById("celebration");
        celebration.classList.add("is-visible");
        const colors = ["#c96d2d", "#8fa55c", "#e39a70", "#d6ad65"];
        for (let index = 0; index < 28; index += 1) {
            const piece = document.createElement("span");
            piece.className = "confetti-piece";
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background = colors[index % colors.length];
            piece.style.animationDelay = `${Math.random() * 0.4}s`;
            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 4000);
        }
    }

});

function closeCelebration() {
    const celebration = document.getElementById("celebration");
    celebration.classList.remove("is-visible");
}
