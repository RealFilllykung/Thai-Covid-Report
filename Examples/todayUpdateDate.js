//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get the latest API update date
thaiCovid
    .getTodayUpdateDate()
    .then(res => 
        {
            //The res type is Date object
            const updateDate = res
            console.log('Last update: ' + updateDate)
        }
    )