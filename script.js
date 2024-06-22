const calBox = document.querySelector(".calculatorButtons");

// Loop to create the buttons inside calculatorButtons
for (let i = 0; i<4; i++){
    const calButtonsContainer = document.createElement("div");
    calButtonsContainer.classList.add("buttonContainer");
    for (let j = 0; j<4; j++){
        const buttons = document.createElement("div");
        buttons.classList.add(`buttonNo${j+1}`)
        buttons.classList.add("buttons");
        calButtonsContainer.appendChild(buttons);
    }
    calBox.appendChild(calButtonsContainer);
}

// function to set up the text within the .calculatorButtons div
(function setupButtonText (){
    const buttonContainer = document.querySelectorAll(".buttons");
    const array = "789\\456x123-0.=+".split('');
    for (let i = 0; i<array.length; i++){
        buttonContainer[i].textContent = array[i];
    }
})();
