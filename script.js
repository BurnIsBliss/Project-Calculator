const calBox = document.querySelector(".calculatorButtons");

// Loop to create the buttons inside calculatorButtons
let count = 1;
for (let i = 0; i<4; i++){
    const calButtonsContainer = document.createElement("div");
    calButtonsContainer.classList.add("buttonContainer");
    for (let j = 0; j<4; j++){
        const buttons = document.createElement("div");
        buttons.classList.add(`buttonNo${count}`)
        buttons.classList.add("buttons");
        calButtonsContainer.appendChild(buttons);
        count++;
    }
    calBox.appendChild(calButtonsContainer);
}

// function to set up the text within the .calculatorButtons div
(function setupButtonText (){
    const buttonContainer = document.querySelectorAll(".buttons");
    const array = "789÷456*123-0.=+".split('');
    for (let i = 0; i<array.length; i++){
        buttonContainer[i].textContent = array[i];
    }
})();

// adding functionality to the buttons
let expression = ''
const buttonContainer = document.querySelectorAll(".buttons");
buttonContainer.forEach((button) => {button.addEventListener("click", () => {if (button.textContent == '=') {
    if (expression.includes('+')) {
        evaluateAndDisplayFinalContent('+');
    }
    else if (expression.includes('-')) {
        evaluateAndDisplayFinalContent('-');
    }
    else if (expression.includes('*')) {
        evaluateAndDisplayFinalContent('*');
    }
    else if (expression.includes('÷')) {
        evaluateAndDisplayFinalContent('÷');
    }
}
else
{displayContent(button.textContent)}})});
buttonContainer.forEach((button) => {button.addEventListener("mouseenter", () => {button.style.opacity=0.65;} )});
buttonContainer.forEach((button) => {button.addEventListener("mouseout", () => {button.style.opacity=1;} )});
//function to display the content within the displayScreen and to call the appropriate operate action
function displayContent(content){
    expression+=content;
    const displayScreen = document.querySelector(".displayScreen");
    displayScreen.innerHTML = expression;
}

function evaluateAndDisplayFinalContent(operator){
    let splitExpression=expression.split(operator);
    let final = Operate(Number(splitExpression[0]), operator, Number(splitExpression[1]));
    const displayScreen = document.querySelector(".displayScreen");
    displayScreen.innerHTML = final;
    expression='';
}


// function Operate (), this function call the corresponding according to the chosen operator
function Operate (number1, operator, number2){
    let val;
    switch (operator){
        case '+':
            val = add(number1, number2);
            break;
        case '-':
            val = subtract(number1, number2);
            break;
        case '*':
            val = multiply(number1, number2);
            break;
        case '÷':
            val = division(number1, number2);
            break;
        default:
            alert("Incorrect selection, Try again!!!!")
            break;
    }
    return val;
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function division(a, b){
    return a/b;
}

// functionality for the CE and AC buttons
const CEButton = document.querySelector(".clearEntry");
CEButton.addEventListener("click", () => {
    if(expression.length !=0){
        expression=expression.slice(0,(expression.length-1));
    }
    console.log(expression);
})