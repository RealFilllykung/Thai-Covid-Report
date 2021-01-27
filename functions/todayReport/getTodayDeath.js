//This function will get the amount of people who death on today

//Use axios for get request
const axios = require('axios')

async function getTodayDeath(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const newDeaths = packet.data.NewDeaths
        return parseInt(newDeaths)
    }
    catch(err){
        return err
    }
}

module.exports = getTodayDeath