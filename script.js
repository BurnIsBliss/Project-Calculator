const calBox = document.querySelector(".calculatorButtons");

// Loop to create the buttons inside th container calculatorButtons
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
let finalExpression = ''; let firstNumber = ''; let secondNumber = ''; let mathOperator = ''; let secondMathOperator = '';
const buttonContainer = document.querySelectorAll(".buttons");
buttonContainer.forEach((button) => {button.addEventListener("click", () => {if (button.textContent == '=') {
    finalExpression = firstNumber+mathOperator+secondNumber;
    if (finalExpression.includes('+')) {
        evaluateAndDisplayFinalContent('+');
    }
    else if (finalExpression.includes('-')) {
        evaluateAndDisplayFinalContent('-');
    }
    else if (finalExpression.includes('*')) {
        evaluateAndDisplayFinalContent('*');
    }
    else if (finalExpression.includes('÷')) {
        evaluateAndDisplayFinalContent('÷');
    }
    else{
        console.log("Incomplete Expression #1");
    }
}
else if (button.textContent=='+' || button.textContent=='-' || button.textContent=='÷' || button.textContent=='*'){
    if (mathOperator.length == 0){
        mathOperator = button.textContent;
    }
    else if (mathOperator.length==1){
        secondMathOperator = button.textContent;
        finalExpression = firstNumber+mathOperator+secondNumber;
        if (finalExpression.includes('+')) {
            evaluateAndDisplayFinalContent('+');
        }
        else if (finalExpression.includes('-')) {
            evaluateAndDisplayFinalContent('-');
        }
        else if (finalExpression.includes('*')) {
            evaluateAndDisplayFinalContent('*');
        }
        else if (finalExpression.includes('÷')) {
            evaluateAndDisplayFinalContent('÷');
        }
        else{
            console.log("Incomplete Expression #2");
        }
    }
}
else if (String(firstNumber).length < 12 && String(secondNumber).length < 12)
{   
    displayContent(button.textContent);
}
else {
    console.log(firstNumber, secondNumber);
    console.log("Length Exceeded!");
}
})});

// code to set the opacity for button hover
buttonContainer.forEach((button) => {button.addEventListener("mouseenter", () => {button.style.opacity=0.65;})});
buttonContainer.forEach((button) => {button.addEventListener("mouseout", () => {button.style.opacity=1;})});

//function to display the content within the displayScreen and to call the appropriate operate action
function displayContent(content){
    const displayScreen = document.querySelector(".displayScreen");
    console.log(firstNumber, mathOperator, secondNumber);
    if (mathOperator.length == 0){
        if (!(content == '.' && (firstNumber.split('.').length == 2)))
        firstNumber+=content;
        displayScreen.innerHTML = firstNumber;
    }
    if (mathOperator.length == 1){
        if (!(content == '.' && (secondNumber.split('.').length == 2)))
        secondNumber+=content;
        displayScreen.innerHTML = secondNumber;
    }
}

function evaluateAndDisplayFinalContent(operator){
    let splitExpression=finalExpression.split(operator);
    let final = Operate(Number(splitExpression[0]), operator, Number(splitExpression[1]));
    const displayScreen = document.querySelector(".displayScreen");
    stringFinal = String(final);
    displayScreen.innerHTML = stringFinal.slice(0,12);
    if(secondMathOperator.length==1){
        firstNumber=stringFinal.slice(0,11);
        secondNumber='';
        mathOperator=secondMathOperator;
        secondMathOperator='';
    }
    else{
        firstNumber=stringFinal.slice(0,11);
        finalExpression=mathOperator=secondNumber=secondMathOperator='';
    }
}


// function Operate (), this function calls the corresponding according to the chosen operator
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
    if(b) return a/b;
    else return "3rr0r";
}

// functionality for the CE and AC buttons and the change in opacity to highlight the button
const CEButton = document.querySelector(".clearEntry");
CEButton.addEventListener("click", () => {
    const displayScreen = document.querySelector(".displayScreen");
    if (mathOperator.length == 0 && firstNumber.length != 0){
        firstNumber=firstNumber.slice(0,(firstNumber.length-1));
        if (firstNumber.length == 0){
            displayScreen.innerHTML = '0';
        }
        else displayScreen.innerHTML = firstNumber;
    }
    if (mathOperator.length == 1 && secondNumber.length != 0){
        secondNumber=secondNumber.slice(0,(secondNumber.length-1));
        if (secondNumber.length==0){
            displayScreen.innerHTML = '0';
        }
        else displayScreen.innerHTML = secondNumber;
    }
})

const ACButton = document.querySelector(".allClear");
ACButton.addEventListener("click", () => {
    finalExpression=firstNumber=secondNumber=mathOperator=secondMathOperator='';
    const displayScreen = document.querySelector(".displayScreen");
    displayScreen.innerHTML = '0';
}
)

// hover animation fot CE and AC buttons
CEButton.addEventListener("mouseenter", () => {CEButton.style.opacity=0.65;});
CEButton.addEventListener("mouseout", () => {CEButton.style.opacity=1;});

ACButton.addEventListener("mouseenter", () => {ACButton.style.opacity=0.65;} );
ACButton.addEventListener("mouseout", () => {ACButton.style.opacity=1;});