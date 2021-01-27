//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get total hospitalized
thaiCovid
    .getTotalHospitalized()
    .then(totalHospitalized => 
        {
            //The totalHospitalized type is integer
            console.log('Total hospitalized: ' + totalHospitalized)
        }
    )