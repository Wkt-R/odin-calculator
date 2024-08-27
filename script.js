let bool;
let op;
let num1;
let num2;
let result;
let displayValue;
let numReady = false;
let infoDisplayValue;

const display = document.querySelector('.display span');
const infoDisplay = document.querySelector('.infoDisplay span');
const wrapper = document.querySelector('.buttons');


function add(num1,num2) {return num1 + num2;}
function substract(num1,num2) {if(num2 == 0) {return "ERROR"} return num1 - num2;}
function multiply(num1,num2) {return num1 * num2;}
function divide(num1,num2) {return num1 / num2;}


function operate(num1,num2,op) {

    let operations = {
        '+' : add(num1,num2),
        '-' : substract(num1,num2),
        '*' : multiply(num1,num2),
        '/' : divide(num1,num2),
    };

    return operations[op]
}

wrapper.addEventListener('click', (event) => {

    // Check if user clicks on a button
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) return;
    let pressedButton = event.target.innerText; 

    if (!["+", "-", "*", "/","=", "C"].includes(pressedButton)) {
        display.innerText += pressedButton;
        displayValue = display.innerText;
        numReady = true;
    }

    if (["+", "-", "*", "/"].includes(pressedButton) && num1 !== undefined && displayValue !== undefined && op !== undefined && numReady) {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        infoDisplay.innerText = `${result} ${pressedButton}`; 
        num1 = result;
        display.innerText = ""; 
        displayValue = undefined;
        op = pressedButton;
        numReady = false;
    } 
    else if (["+", "-", "*", "/"].includes(pressedButton) && num1 === undefined && displayValue !== undefined) {
        op = pressedButton;
        num1 = parseInt(displayValue);
        infoDisplay.innerText = `${num1} ${op}`; 
        display.innerText = ""; 
        displayValue = undefined;
        numReady = false;
    }

    if (pressedButton === "=" && num1 !== undefined && op !== undefined && displayValue !== undefined) {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        display.innerText = result;
        infoDisplay.innerText = ""; 
        num1 = result;
        displayValue = undefined;
        op = undefined;
    }

    if (pressedButton === "C") {
        display.innerText = "";
        infoDisplay.innerText = "";
        displayValue = undefined;
        num1 = undefined;
        num2 = undefined;
        op = undefined;
        numReady = false;
    }

});