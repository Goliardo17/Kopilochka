import { SERVER } from "./constant";

export const fetchHistory = async (id) => {
  const response = await fetch(`${SERVER + '/history'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: id}),
    })

  const json = response.json()
  return json
}