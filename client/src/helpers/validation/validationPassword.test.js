import { validationPassword } from "./validationPassword";

const testPassword1 = {
    value: "restpeace",
    result: false
}

const testPassword2 = {
    value: "rest1peace",
    result: true
}

const testPassword3 = {
    value: "rest1",
    result: false
}

describe('Проверка валидации пароля', () => {
    test('Проверка пароля на содержание числа', () => {
        expect(validationPassword(testPassword1.value)).toBe(testPassword1.result)
    })

    test('Проверка корректно введенного пароля', () => {
        expect(validationPassword(testPassword2.value)).toBe(testPassword2.result)
    })

    test('Проверка длины пароля', () => {
        expect(validationPassword(testPassword3.value)).toBe(testPassword3.result)
    })
})