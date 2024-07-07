const { historyService } = require('../services/history.service')

const getUserHistory = (userId) => historyService.getUserHistory(userId)

const recordTransfer = (transferForm) => {
    historyService.recordTransfer(date, transferForm)
}

const historyControllers = {
    getUserHistory,
    recordTransfer
}

module.exports = {historyControllers}

// записывать дату в БД