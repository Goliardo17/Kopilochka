import { SERVER } from "./constant"

export const fetchCurrencies = async () => {
    const response = await fetch(`${SERVER + '/get-currencies'}`)

    const json = await response.json()
    return json
}