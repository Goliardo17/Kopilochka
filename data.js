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

export const currencies = [
  {
    id: 1, 
    name: "United State Dollar",
    image: "USD.svg",
    exchange: {
      timestamp: 1719162648,
      source: "USD",
      quotes: {
        USDRUB: 87.9600,
        USDEUR: 0.79085,
        USDCNY: 7.26000,
        USDTRY: 1.37000
      }
    }
  }, 
  {
    id: 2, 
    name: "Russian Ruble",
    image: "RUB.svg", 
    exchange: {
      timestamp: 1719162648,
      source: "RUB",
      quotes: {
        RUBUSD: 0.011369,
        RUBEUR: 0.008962,
        RUBCNY: 0.083019,
        RUBTRY: 0.015573
      }
    }
  },
  {
    id: 3, 
    name: "Euro",
    image: "EUR.svg",
    exchange: {
      timestamp: 1719162648,
      source: "EUR",
      quotes: {
        EURRUB: 87.9600,
        EURUSD: 0.79085,
        EURCNY: 7.26000,
        EURTRY: 1.37000
      }
    }
  }, 
  {
    id: 4, 
    name: "Turckech Lira",
    image: "TRY.svg",
    exchange: {
      timestamp: 1719162648,
      source: "TRY",
      quotes: {
        TRYRUB: 87.9600,
        TRYEUR: 0.79085,
        TRYCNY: 7.26000,
        TRYUSD: 1.37000
      }
    }
  },
  {
    id: 5, 
    name: "Chinas Yuan",
    image: "CNY.svg",
    exchange: {
      timestamp: 1719162648,
      source: "CNY",
      quotes: {
        CNYRUB: 87.9600,
        CNYEUR: 0.79085,
        CNYUSD: 7.26000,
        CNYTRY: 1.37000
      }
    }
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