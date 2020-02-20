let displayValue = '0';
let lastValue = '0';
let operation;
const displayText = document.querySelector(".display");



/*Math Functions*/
function subtract(num1, num2) {
    return num1 - num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



/*Display Screen Functions*/
function clearScreen(value) {
    displayValue = '0';
    lastValue = '0';
    operation = '';
    displayText.textContent = displayValue
}

function changeDisplay(value) {
    displayValue = `${value}`;
    displayText.textContent = displayValue;
}

function updateDisplay (value) {
    if (displayValue == 0) {
        changeDisplay(value);
    } else {
        if (value == '.') {
            if (!displayValue.includes(".")) {
                displayValue += `${value}`;
            }
        } else {
            displayValue += `${value}`;
        }
        changeDisplay(displayValue);
    }
}



/*Operation Functions */
function updateOperation (operator) {
    lastValue = displayValue;
    displayValue = '0';
    operation = operator;
}

function operate(operator, num1, num2) {
    let result;

    if (!operator) {
        result = displayValue;
    }
    if (operator == '+') {
        let newNum1 = Number(num1);
        let newNum2 = Number(num2);
        result = add(newNum1, newNum2);
    }
    else if (operator == '-') {
        result = subtract(num1, num2);
    }
    else if (operator == 'X') {
        result = multiply(num1, num2);
    }
    else if (operator == '/') {
        if (num2 != 0) {
            result = divide(num1, num2);
        } else {
            result = 'ERROR!';
        }
    }
    changeDisplay(result);
    if (result == 'ERROR!') {
        displayValue = '0'
        lastValue = '0';
        operation = '';
    }
}