import { validationName } from "./validationName"

const testName1 = {
    value: "try",
    result: false
}

const testName2 = {
    value: "again",
    result: true
}

describe('Проверка валидации имени введенного пользователем', () => {
    test('Проверка на длину строки', () => {
        expect(validationName(testName1.value)).toBe(testName1.result)
    })

    test('Проверка на корректно введенное имя пользователем', () => {
        expect(validationName(testName2.value)).toBe(testName2.result)
    })
})