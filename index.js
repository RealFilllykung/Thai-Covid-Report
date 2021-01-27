const getTodayInfected = require('./functions/todayReport/getTodayInfected')
const getTotalConfirmed = require('./functions/totalReport/getTotalConfirmedCase')
const getTodayRecovered = require('./functions/todayReport/getTodayRecovered')
const getTodayUpdateDate = require('./functions/todayReport/getTodayUpdateDate')
const getTodayDeath = require('./functions/todayReport/getTodayDeath')
const getTodayHospitalized = require('./functions/todayReport/getTodayHospitalized')
const getTotalHospitalized = require('./functions/totalReport/getTotalHospitalized')

module.exports = {
    getTotalConfirmed: () => getTotalConfirmed(),
    getTotalHospitalized: () => getTotalHospitalized(),

    getTodayInfected: () => getTodayInfected(),
    getTodayRecovered: () => getTodayRecovered(),
    getTodayUpdateDate: () => getTodayUpdateDate(),
    getTodayDeath: () => getTodayDeath(),
    getTodayHospitalized: () => getTodayHospitalized()
}