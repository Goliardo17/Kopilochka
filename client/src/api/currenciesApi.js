import { SERVER } from "./constant";

export const fetchCurrencies = async () => {
  const response = await fetch(`${SERVER + "/currency"}`, {
    method: "GET",
    headers: {
      "Authorization": sessionStorage.getItem('id')
    }
  });

  const json = await response.json();
  return json;
};
