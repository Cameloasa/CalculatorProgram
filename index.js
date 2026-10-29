//Calculator program

const display = document.getElementById("display");

// Add a number or operator to the display
function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the expression
function calculate() {
    const expression = display.value.trim();

    if (expression === "") {
        return;
    }

    // Allow only numbers, decimal points and basic operators
    if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        // Evaluate the validated mathematical expression
        const result = Function(`"use strict"; return (${expression})`)();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = String(Number(result.toPrecision(12)));
    } catch {
        display.value = "Error";
    }
}


