const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector('#output');

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === "90°" || value === "right angled" ||
            value === "one right angle" || value === "12, 16, 20" ||
            value === "Equilateral triangle") {
            score = score + 1;
        }
        index = index + 1;
    }
    outputE1.innerText = "your score is " + score;
}
submitAnswerBtn.addEventListener("click", calculateScore);