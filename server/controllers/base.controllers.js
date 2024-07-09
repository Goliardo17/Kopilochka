const { baseService } = require('../services/base.service')

const createBase = async () => {
    await baseService.create()
}

const getCurrencies = () => {
    return baseService.getCurrencies()
}

const baseControllers = {
    createBase,
    getCurrencies
}

module.exports = baseControllers