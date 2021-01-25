//This function will get the amount of today's new recovered case

//Use axios for get request
const axios = require('axios')

async function getTodayRecovered(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const NewRecovered = packet.data.NewRecovered
        return parseInt(NewRecovered)
    }
    catch(err){
        return err
    }
}

module.exports = getTodayRecovered