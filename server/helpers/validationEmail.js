const validationEmail = (string) => {
    const splitString = string.split("@")

    if (splitString.length !== 2) {
        return false
    }

    const checkDomen = splitString[1].split(".")

    if (checkDomen.length !== 2) {
        return false
    }
    
    return true
}

module.exports = validationEmail