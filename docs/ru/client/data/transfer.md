# Данные о транзакции

## Образующий объект
```
  transfer {
    "accountOutside": object,
    "accountInside": object,
    "type": func
}
```

## Образуемый объект
```
  transferInfo {
    id: number,
    owner: string,
    transfer: object,
    categories: object,
    date: date
  }
```