import { SERVER } from "./constant"

export const fetchCurrencies = async () => {
    const response = await fetch(`${SERVER + '/currencies'}`)

    const json = await response.json()
    return json
}