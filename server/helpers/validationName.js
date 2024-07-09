const validationName = (string) => {
    const length = string.length > 3
    
    if (!length) {
        return false
    }
    
    const splitString = string.split("")
    
    let checkGaps = false

    for (let symbol of splitString){
        if (symbol === " ") {
            checkGaps = true
            break
        }
    }

    if (checkGaps) {
        return false
    }

    return true
}

module.exports = validationName