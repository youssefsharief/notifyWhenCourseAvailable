const cheerio = require('cheerio')

module.exports = {
    getRemainingSeats(CRN, body) {
        const $ = cheerio.load(body)
        var x = $(`tr:contains(${CRN})`).children()[12]
        return parseInt($(x).text())
    }
}