//This function will get the latest date that the API update

//Use axios for get request
const axios = require('axios')

async function getTodayUpdateDate(){
    try{
        const packet = await axios.get('https://covid19.th-stat.com/api/open/today')
        const UpdateDate = packet.data.UpdateDate

        //Slice the date
        const dateSlice = UpdateDate.toString().split('\/')
        const splitYearTime = dateSlice[2].split(" ")

        //Format the date string
        const dateString = splitYearTime[0] + '-' + dateSlice[1] + '-' + dateSlice[0] + 'T' + splitYearTime[1] + ":00"

        var today = new Date(dateString)
        return today
    }
    catch(err){
        return err
    }
}

module.exports = getTodayUpdateDate