export const fetchAccounts = (id) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3333/get-accounts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: id})
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err))
  });
};

export const requestOfCreateAccount = (form) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3333/create-new-account', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((json) => resolve(json)) // возвращает массив счетов
      .catch((err) => console.log(err))
  });
};

export const changeAmount = (form) => {
  switch (form.type) {
    case "expenditure": 
      return expenditure(form)  
    default:
      return income(form)
  } 
}

export const transferAmount = (form) => {
  return new Promise ((resolve, reject) => {
    fetch('http://localhost:3333/transfer-between', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err))
  })
}

function income (form) {
  return new Promise ((resolve, reject) => {
    fetch('http://localhost:3333/transfer-income', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err))
  })
}

function expenditure (form) {
  return new Promise ((resolve, reject) => {
    fetch('http://localhost:3333/transfer-expense', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err))
  })
}