const inputs = document.querySelectorAll(".angle-input");
const IsTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");


function CalculateSumOfAngles(angle1, angle2, angle3) {
    const SumOfAngles = angle1 + angle2 + angle3;
    return SumOfAngles;
}
 

function IsTriangle() {
    if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") {
        showMessage("Fields can not be empty.", "red");
    } else if (inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0) { 
        showMessage("Negative numbers not allowed.", "red");
    } else {
        const SumOfAngles = CalculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

        if (SumOfAngles === 180) {
            showMessage("yey, The angle from a triangle", "green");
        }
        else {
            showMessage("oh oh,The angle don't from a triangle", "red");
        }
    }   
   
}

const showMessage = (message, color) => {
    output.innerText = message;
    output.style.color = color;
};

 IsTriangleBtn.addEventListener("click",IsTriangle)