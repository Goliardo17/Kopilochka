import { currencies } from "../../../data"

export const fetchCurrencies = () => {
    return new Promise((res) => setTimeout(() => res(currencies), 500))
}