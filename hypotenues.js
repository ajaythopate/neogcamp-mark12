const sides = document.querySelectorAll('.side-input');
const hypotenuesBtn = document.querySelector('#hypotenues-btn');

const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
    console.log(sumOfSquares);
}
function calculateHypotenues() {
    if (sides[0].value === "" || sides[1].value === "") {
        showMessage("Fields can not be empty", "red");    
    } else if (sides[0].value < 0 || sides[1].value < 0) {
        showMessage("Negative numbers not allowed.", "red");
    } else {
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenues = Math.sqrt(sumOfSquares);
        showMessage("The length of hypotenuse is " + lengthOfHypotenues , "green");
    }
}

const showMessage = (message, color) => {
    outputE1.innerText = message;
    outputE1.style.color = color;
};

hypotenuesBtn.addEventListener("click", calculateHypotenues);