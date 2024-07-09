const { historyService } = require('../services/history.service')

const getUserHistory = async (userId) => await historyService.getUserHistory(userId)

const recordTransfer = async (form, exchange) => {
    const date = new Date()
    await historyService.recordTransfer(date, form, exchange)
}

const historyControllers = {
    getUserHistory,
    recordTransfer
}

module.exports = {historyControllers}