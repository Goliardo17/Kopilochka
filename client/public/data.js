// id присваивается не из БД, а в том порядке в котором они пришли

export const categories = [
  {
    id: 1,
    type: "expenditure",
    name: "Расход 1",
    image: "/"
  },
  {
    id: 2,
    type: "expenditure",
    name: "Расход 2",
    image: "/"
  },
  {
    id: 3,
    type: "expenditure",
    name: "Расход 3",
    image: "/"
  },
  {
    id: 4,
    type: "revenues",
    name: "Доход 1",
    image: "/"
  },
  {
    id: 5,
    type: "revenues",
    name: "Доход 2",
    image: "/"
  },
  {
    id: 6,
    type: "revenues",
    name: "Доход 3",
    image: "/"
  },
]

export const form = {
  type: "revenues",
  accountFrom: 0,
  accountTo: 0,
  category: "",
  amount: 0.00,
  exchange: 1.00
}