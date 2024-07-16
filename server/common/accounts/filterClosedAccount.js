const filterAccountByStatus = (status, array) => {
    return array.filter((item) => item.status === status)
}

module.exports = {filterAccountByStatus}