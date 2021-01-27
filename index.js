const getTodayInfected = require('./functions/todayReport/getTodayInfected')
const getTotalConfirmed = require('./functions/totalReport/getTotalConfirmedCase')
const getTodayRecovered = require('./functions/todayReport/getTodayRecovered')
const getTodayUpdateDate = require('./functions/todayReport/getTodayUpdateDate')
const getTodayDeath = require('./functions/todayReport/getTodayDeath')

module.exports = {
    getTodayInfected: () => getTodayInfected(),
    getTotalConfirmed: () => getTotalConfirmed(),
    getTodayRecovered: () => getTodayRecovered(),
    getTodayUpdateDate: () => getTodayUpdateDate(),
    getTodayDeath: () => getTodayDeath()
}