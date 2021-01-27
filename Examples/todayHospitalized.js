//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get infected on today
thaiCovid
    .getTodayHospitalized()
    .then(newHospitalized => 
        {
            //The newHospitalized type is integer
            console.log('Today hospitalized: ' + newHospitalized)
        }
    )