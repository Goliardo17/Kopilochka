const { transferService } = require("../services/transfer.service");

const createTransferForm = (form) => ({
  userId: form.userId,
  accountNameFrom: form.accountFrom.name ? form.accountFrom.name : 0,
  accountIdFrom: form.accountFrom.id ? form.accountFrom.id : 0,
  accountNameTo: form.accountTo.name ? form.accountTo.name : 0,
  accountIdTo: form.accountTo.id ? form.accountTo.id : 0,
  type: form.type,
  category: form.category,
  amount: form.amount,
  exchange: form.exchange,
});

const transferToAccount = (form) => {
  const transferForm = createTransferForm(form)

  return transferService.revenuesOnAccount(transferForm);
};

const transferFromAccount = (form) => {
  const transferForm = createTransferForm(form)

  transferService.debitingFromAccount(transferForm);
};

const transferBetweenAccounts = (form) => {
  const transferForm = createTransferForm(form)

  if (transferForm.exchange == 1) {
    transferService.debitingFromAccount(transferForm);
    transferService.revenuesOnAccount(transferForm);
    return true;
  }

  const transferFormTo = { ...transferForm };
  transferFormTo.amount = Number(
    transferForm.amount * transferForm.exchange
  ).toFixed(2);
  transferService.debitingFromAccount(transferForm);
  transferService.revenuesOnAccount(transferFormTo);
  return true;
};

const transferControllers = {
  createTransferForm,
  transferToAccount,
  transferFromAccount,
  transferBetweenAccounts
}

module.exports = {transferControllers}

// написать конвертацию дробных чисел
// обратиться еще в два сервиса: запсать трансфер в историю и получить новый список счетов