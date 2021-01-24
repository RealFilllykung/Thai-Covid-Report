//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get infected on today
thaiCovid
    .getTodayInfected()
    .then(res => 
        {console.log('New confirmed infected case: ' + res)}
    )