import { SERVER } from "./constant";

export const fetchHistory = async () => {
  const response = await fetch(`${SERVER + '/history'}`, {
      method: "GET",
      headers: {
        "Authorization": sessionStorage.getItem('id'),
        "Content-Type": "application/json",
      }
    })

  const json = response.json()
  return json
}