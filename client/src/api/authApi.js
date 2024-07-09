import { SERVER } from "./constant"

export const authorization = async (userInfo) => {
  try {
    const response  = await fetch(`${SERVER + '/user'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
  
    const json = await response.json()
  
    if (json?.id) {
      sessionStorage.setItem("id", json.id)
      return true
    }

    alert("Incorrect username or password")
    return false
  } catch (err) {
    alert("Incorrect username or password")
    return false
  }
}

export const requestOfNewUser = async (userInfo) => {
  try {
    const response = await fetch(`${SERVER + '/user/create'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })

    const json = await response.json()

    return json
  } catch (err) {
    alert("An account with such an email already exists")
  }
}