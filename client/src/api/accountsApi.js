import { SERVER } from "./constant";

export const fetchAccounts = async (id) => {
  const response = await fetch(`${SERVER + '/accounts'}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
  
  const json = response.json();
  return json;
};

export const requestOfCreateAccount = async (form) => {
  await fetch(`${SERVER + '/account/create'}`, {
    method: "POST",
    headers: {
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
};

async function income(form) {
  const response = await fetch(`${SERVER + '/transfer/income'}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
}

async function expenditure(form) {
  const response = await fetch(`${SERVER + '/transfer/expense'}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
}

export const closeAccount = async (form) => {
  const response = await fetch(`${SERVER + '/account/close'}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const json = response.json();
  return json;
};