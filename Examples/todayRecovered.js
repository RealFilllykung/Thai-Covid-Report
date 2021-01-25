//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who recovered today
thaiCovid
    .getTodayRecovered()
    .then(res => 
        {
            //The res type is integer
            const recovered = res
            console.log('Today recovered: ' + recovered)
        }
    )