ocument.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".memory-card");
    const scoreElement = document.getElementById("score");
    const movesElement = document.getElementById("moves");
    const messageElement = document.getElementById("game-message");

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;
    let score = 0;
    let matchedPairs = 0;
  const cardArray = Array.from(cards);

    cardArray.sort(() => Math.random() - 0.5);

    const board = document.getElementById("game-board");

    cardArray.forEach(card => {
        board.appendChild(card);
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

});
