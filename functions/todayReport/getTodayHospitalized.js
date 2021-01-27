//This function will get the amount of people who got hospitalized on today

//Use axios for get request
const axios = require('axios')

async function getTodayInfected(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const NewHospitalized = packet.data.NewHospitalized
        return parseInt(NewHospitalized)
    }
    catch(err){
        return err
    }
}

module.exports = getTodayInfected