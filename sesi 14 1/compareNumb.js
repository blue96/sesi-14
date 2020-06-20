function compareNumbers(firstNumber, secondNumber){
    if (firstNumber > secondNumber) {
        return false
    }
    else if (secondNumber > firstNumber){
        return true
    }
    else {
        return -1
    }
}

export {
    compareNumbers,
}