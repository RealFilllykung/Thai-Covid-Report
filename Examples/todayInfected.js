//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get infected on today
thaiCovid
    .getTodayInfected()
    .then(res => 
        {
            //The res type is integer
            const newInfected = res
            console.log('Today confirmed case: ' + newInfected)
        }
    )