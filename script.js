const calBox = document.querySelector(".calculatorButtons");

for (let i = 0; i<4; i++){
    const calButtonsContainer = document.createElement("div");
    calButtonsContainer.classList.add("buttonContainer");
    for (let j = 0; j<4; j++){
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        calButtonsContainer.appendChild(buttons);
    }
    calBox.appendChild(calButtonsContainer);
}


