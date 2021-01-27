# Thai-Covid-Report ([EN](https://github.com/RealFilllykung/Thai-Covid-Report/blob/main/README.md)/[TH](https://github.com/RealFilllykung/Thai-Covid-Report/blob/main/README.th.md))
This project is to make developer have an easier access to get the covid situation update data from https://covid19.ddc.moph.go.th/

# Installation
You can install this package by using npm
```
npm install thai-covid-report
```
# Sample Usage
All of the example are provided inside the Examples folder and [wiki page](https://github.com/RealFilllykung/Thai-Covid-Report/wiki) of this repo, but here is the sample snippet of getting the amount of people who get infected today.

**getTodayInfected() example**
```javascript
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
```
# Full Documentation
The full documentation and examples snippet for this project is available inside the [wiki page](https://github.com/RealFilllykung/Thai-Covid-Report/wiki).
# Credits
This package will not be possible without the public API from https://covid19.ddc.moph.go.th/ and [Axios](https://github.com/axios/axios)

# License
This package uses MIT license.