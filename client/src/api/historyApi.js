export const fetchHistory = (id) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3333/get-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id}),
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err));
  });
}