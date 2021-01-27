//This function will get the amount of people who went hospitalized

//Use axios for get request
const axios = require('axios')

async function getTotalHospitalized(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const Hospitalized = packet.data.Hospitalized
        return parseInt(Hospitalized)
    }
    catch(err){
        return err
    }
}

module.exports = getTotalHospitalized