import { validationEmail } from "./validationEmail";

const email1 = {
    value: "test@textcom",
    result: false
}

const email2 = {
    value: "testtext.com",
    result: false
}

const email3 = {
    value: "test@text.com",
    result: true
}

const email4 = {
    value: "test@text.com.com",
    result: false
}

describe('Проверка валидации адресса почты пользователя', () => {
    test('При некорректном вводе адресса почты без точки перед доменом', () => {
        expect(validationEmail(email1.value)).toBe(email1.result)
    })

    test('При некорректном вводе адресса почты без собаки', () => {
        expect(validationEmail(email2.value)).toBe(email2.result)
    })

    test('При корректном вводе адресса почты', () => {
        expect(validationEmail(email3.value)).toBe(email3.result)
    })

    test('При некорректном вводе адресса почты с точкой после указания домена', () => {
        expect(validationEmail(email4.value)).toBe(email4.result)
    })
})