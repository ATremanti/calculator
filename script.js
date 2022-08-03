const numbers = document.querySelectorAll('.btn-num')
const currentDisplay = document.querySelector('.current-value')
const clear = document.querySelector('.btn-clear')
const operators = document.querySelectorAll('.btn-op')
const equals = document.querySelector('.btn-equal')

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            currentValue = add(+num1, +num2)
            return currentDisplay.textContent = add(+num1, +num2)
            
        case "-":
            currentValue = subtract(num1, num2)
            return currentDisplay.textContent = subtract(num1, num2)
            
        case "*":
            currentValue = multiply(num1, num2)
            return currentDisplay.textContent = multiply(num1, num2)
            
        case "÷":
            if (num2 == 0) {
                return currentDisplay.textContent = "Math error"
            } else {
                currentValue = divide(num1, num2)
                return currentDisplay.textContent = divide(num1, num2)
            }
            
    }
}

function clearDisplay () {
    currentDisplay.textContent = ''
    currentValue = ''
    currentOp = ''
}

let currentValue = ''
let currentOp = ''
let num1 = ''
let num2 = ''

numbers.forEach(button => {
    button.addEventListener('click', function () {
        currentDisplay.textContent += `${button.value}`
        currentValue += `${button.value}`
    })
})

operators.forEach(button => {
    button.addEventListener('click', function () {
        num1 = currentValue
        currentDisplay.textContent += ` ${button.value} `
        currentOp = button.value
        currentValue = ''
    })
})

clear.addEventListener('click', function () {
    clearDisplay()
})

equals.addEventListener('click', function () {
    num2 = currentValue
    operate(currentOp, num1, num2)
    currentOp = ''
})