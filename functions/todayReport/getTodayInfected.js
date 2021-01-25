//This function will get the amount of people who got infected from Covid on today

//Use axios for get request
const axios = require('axios')

async function getTodayInfected(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const newConfirmed = packet.data.NewConfirmed
        return parseInt(newConfirmed)
    }
    catch(err){
        return err
    }
}

module.exports = getTodayInfected