export const validationPassword = (string) => {
    const length = string.length < 6

    if (length) {
        return false
    }

    let searchString = false
    let searchNumber = false

    for (let symbol of string) {
        const number = Number(symbol)
        if (number) {
          searchNumber = true
        }

        if (!searchString) {
            typeof(symbol) === "string" ? searchString = true : null
        }
    }

    if (searchNumber && searchString) {
        return true
    }

    return false
}