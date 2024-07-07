const { baseService } = require('../services/base.service')

const createBase = () => {
    baseService.createUsersTable()
    baseService.createAccountsTable()
    baseService.createHistoryTable()
    baseService.createCategoryTable()
    return
}

const getCurrencies = () => {
    return baseService.getCurrencies()
}

const baseControllers = {
    createBase,
    getCurrencies
}

module.exports = {baseControllers}