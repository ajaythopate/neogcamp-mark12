const sides = document.querySelectorAll('.side-input');
const hypotenuesBtn = document.querySelector('#hypotenues-btn');

const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
    console.log(sumOfSquares);
}
function calculateHypotenues() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenues = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The length of hypotenuse is " + lengthOfHypotenues
}

hypotenuesBtn.addEventListener("click", calculateHypotenues);