import React from "react"

// написать запросы:
// на получения списка счетов, доступных для перевода
// на получение списка категорий
// 

export const StandardTransferForm = () => {
  return (
    <div>
      <Select /> {/* accountFrom */}
      <Select /> {/* acountTo */}
      <Input placeholder="Сумма в валюте пополнения"/> {/* только при разных валютах */}
      <Input placeholder="Сумма в валюте списания"/> {/* amount for accountFrom */}
    </div>
  )
}