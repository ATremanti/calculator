const numbers = document.querySelectorAll('.btn-num')
const currentDisplay = document.querySelector('.current-value')
const clear = document.querySelector('.btn-clear')
const operators = document.querySelectorAll('.btn-op')
const equals = document.querySelector('.btn-equal')
const dot = document.querySelector('.btn-dot')

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
    dot.disabled = false
    currentDisplay.textContent = ''
    currentValue = ''
    currentOp = ''
    num1 = ''
    num2 = ''
}

let currentValue = ''
let currentOp = ''
let lastOp = ''
let num1 = ''
let num2 = ''

numbers.forEach(button => {
    button.addEventListener('click', function () {
        if (currentOp !== '') {          
            currentDisplay.textContent += `${button.value}`
            currentValue += `${button.value}`
            num2 = currentValue
        } else if (lastOp === '=') {
            lastOp = ''
            clearDisplay()
            currentDisplay.textContent += `${button.value}`
            currentValue += `${button.value}`
            num1 = currentValue
        } else {
            currentDisplay.textContent += `${button.value}`
            currentValue += `${button.value}`
            num1 = currentValue
        }
    })
})

operators.forEach(button => {
    button.addEventListener('click', function () {
        dot.disabled = false
        if (currentOp !== '') {
            operate(currentOp, num1, num2)
            currentOp = button.value
            currentDisplay.textContent += ` ${button.value} `
            num1 = currentValue
            currentValue = ''
            num2 = ''
        } else {
            currentOp = button.value
            currentDisplay.textContent += ` ${button.value} `
            currentValue = ''
        }
    })
})

clear.addEventListener('click', function () {
    clearDisplay()
})

equals.addEventListener('click', function () {
    operate(currentOp, num1, num2)
    currentOp = ''
    lastOp = '='
    num1 = currentValue
    num2 = ''
    dot.disabled = false
})

dot.addEventListener('click', function () {
    if (currentOp === '') {
        if (!num1.toString().includes('.')) {
            currentDisplay.textContent += '.'
            currentValue += '.'
            dot.disabled = true
            lastOp = ''
        }
    } else {
        if (!num2.includes('.')) {
            currentDisplay.textContent += '.'
            currentValue += '.'
            dot.disabled = true
        }
    }
})