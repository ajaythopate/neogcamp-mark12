const inputs = document.querySelectorAll(".angle-input");
const IsTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");


function CalculateSumOfAngles(angle1, angle2, angle3) {
    const SumOfAngles = angle1 + angle2 + angle3;
    return SumOfAngles;
}
 

function IsTriangle() {
    const SumOfAngles = CalculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
 
    if (SumOfAngles === 180) {
        output.innerText = "yey, The angle from a triangle";
    }
    else {
        output.innerText = "oh oh,The angle don't from a triangle";
    }
}

 IsTriangleBtn=addEventListener("click",IsTriangle)