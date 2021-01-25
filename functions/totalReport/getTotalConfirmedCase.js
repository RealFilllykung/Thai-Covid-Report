//This function will get the amount of total confirmed case from today's summary

//Use axios for get request
const axios = require('axios')

async function getTotalConfirmed(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const Confirmed = packet.data.Confirmed
        return parseInt(Confirmed)
    }
    catch(err){
        return err
    }
}

module.exports = getTotalConfirmed