// id присваивается не из БД, а в том порядке в котором они пришли

export const userAccounts = [
  {
    id: 1,
    name: "Первый счет пользователя",
    currency: "USD",
    default: true,
    amount: 100.00
  },
  {
    id: 2,
    name: "Второй счет пользователя",
    currency: "RUB",
    amount: 50.00
  },
  {
    id: 3,
    name: "Третий счет пользователя",
    currency: "RUB",
    amount: 0.00
  },
  {
    id: 4,
    name: "Четвертый счет пользователя",
    currency: "GBP",
    amount: 50.00
  }
]

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

export const history = [
  {
    date: "Sun Jun 23 2024 22:53:56 GMT+0300 (Москва, стандартное время)",
    transfer: {
      accountFrom: {id: 1, name: 'Первый счет пользователя', currency: 'USD', default: true, amount: 100},
      accountTo: {id: 3, name: 'Третий счет пользователя', currency: 'RUB', amount: 0},
      amount: 5,
      category: "",
      exchange: 87.96,
      type: "revenues"
    }
  }
]

export const currencies = [
  {
    id: 1, 
    name: "United State Dollar",
    image: "/",
    exchange: {
      timestamp: 1719162648,
      source: "USD",
      quotes: {
        USDRUB: 87.9600,
        USDGBP: 0.79085,
        USDCNY: 7.26000,
        USDCAD: 1.37000
      }
    }
  }, 
  {
    id: 2, 
    name: "Russian Ruble",
    image: "/", 
    exchange: {
      timestamp: 1719162648,
      source: "RUB",
      quotes: {
        RUBUSD: 0.011369,
        RUBGBP: 0.008962,
        RUBCNY: 0.083019,
        RUBCAD: 0.015573
      }
    }
  },
  {
    id: 3, 
    name: "Grate Britan Pound",
    image: "/",
    exchange: {
      timestamp: 1719162648,
      source: "GBP",
      quotes: {
        GBPRUB: 87.9600,
        GBPUSD: 0.79085,
        GBPCNY: 7.26000,
        GBPCAD: 1.37000
      }
    }
  }, 
  {
    id: 4, 
    name: "Canadian Dollar",
    image: "/",
    exchange: {
      timestamp: 1719162648,
      source: "CAD",
      quotes: {
        CADRUB: 87.9600,
        CADGBP: 0.79085,
        CADCNY: 7.26000,
        CADUSD: 1.37000
      }
    }
  },
  {
    id: 5, 
    name: "Chinas Yuan",
    image: "/",
    exchange: {
      timestamp: 1719162648,
      source: "CNY",
      quotes: {
        CNYRUB: 87.9600,
        CNYGBP: 0.79085,
        CNYUSD: 7.26000,
        CNYCAD: 1.37000
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