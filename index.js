const getTodayInfected = require('./functions/todayReport/getTodayInfected')
const getTotalConfirmed = require('./functions/totalReport/getTotalConfirmedCase')
const getTodayRecovered = require('./functions/todayReport/getTodayRecovered')
const getTodayUpdateDate = require('./functions/todayReport/getTodayUpdateDate')

module.exports = {
    getTodayInfected: () => getTodayInfected(),
    getTotalConfirmed: () => getTotalConfirmed(),
    getTodayRecovered: () => getTodayRecovered(),
    getTodayUpdateDate: () => getTodayUpdateDate()
}