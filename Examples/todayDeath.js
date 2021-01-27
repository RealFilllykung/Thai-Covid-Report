//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of death for today
thaiCovid
    .getTodayDeath()
    .then(newDeath => 
        {
            //newDeath have a type of int
            console.log('Today death: ' + newDeath)
        }
    )