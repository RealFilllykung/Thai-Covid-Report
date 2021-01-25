//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get infected on today
thaiCovid
    .getTotalConfirmed()
    .then(res => 
        {
            //The res type is integer
            const confirmed = res
            console.log('Total confirmed case: ' + confirmed)
        }
    )