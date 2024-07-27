import { SERVER } from "./constant";

export const fetchAccounts = async () => {
  const response = await fetch(`${SERVER + '/accounts'}`, {
    method: "GET",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    }
  })
  
  const json = response.json();
  return json;
};

export const requestOfCreateAccount = async (form) => {
  await fetch(`${SERVER + '/accounts/create'}`, {
    method: "POST",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form)
  });

  return;
};

export const changeAmount = (form) => {
  switch (form.type) {
    case "expenditure":
      return expenditure(form);
    default:
      return income(form);
  }
};

export const transferAmount = async (form) => {
  const response = await fetch(`${SERVER + '/transfer/between'}`, {
    method: "PUT",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
};

async function income(form) {
  const response = await fetch(`${SERVER + '/transfer/income'}`, {
    method: "PUT",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
}

async function expenditure(form) {
  const response = await fetch(`${SERVER + '/transfer/expense'}`, {
    method: "PUT",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
}

export const closeAccount = async (form) => {
  const response = await fetch(`${SERVER + '/accounts/close'}`, {
    method: "PUT",
    headers: {
      "authorization": sessionStorage.getItem('id'),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
};