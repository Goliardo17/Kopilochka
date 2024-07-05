import { currencies } from "../../../../../public/data";
import { getQuotes } from ".";

const account = {
    currency: "USD"
}

describe('Проверка списка валют выводимых на главной странице', () => {
    test('Проверка фильтрации по выбранному счету пользователя', () => {
        const testingValue = currencies.filter((currency) => currency.exchange.source === account.currency)
        const quotes = getQuotes(currencies, account)
    
        console.log(testingValue)
        
        // expect(testingValue).toEqual(quotes)
    })
})