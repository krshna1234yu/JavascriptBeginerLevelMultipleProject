document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const previousOperandTextElement = document.getElementById('previous-operand');
    const currentOperandTextElement = document.getElementById('current-operand');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'AC') {
                currentInput = '';
                previousInput = '';
                operator = '';
                updateDisplay();
            } else if (value === '±') {
                if (currentInput) {
                    currentInput = (-parseFloat(currentInput)).toString();
                    updateDisplay();
                }
            } else if (value === '%') {
                if (currentInput) {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    updateDisplay();
                }
            } else if (value === '√') {
                if (currentInput) {
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    updateDisplay();
                }
            } else if (value === '=') {
                if (previousInput && operator && currentInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    operator = '';
                    previousInput = '';
                    updateDisplay();
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        currentInput = calculate(previousInput, currentInput, operator);
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                    updateDisplay();
                }
            } else {
                currentInput += value;
                updateDisplay();
            }
        });
    });

    function updateDisplay() {
        currentOperandTextElement.textContent = currentInput;
        previousOperandTextElement.textContent = previousInput + ' ' + operator;
    }

    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return (a / b).toString();
            default: return '';
        }
    }
});
