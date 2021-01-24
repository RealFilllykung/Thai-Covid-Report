# Thai-Covid-Report
This project is to make developer have an easier access to get the covid situation update data from covid19.ddc.moph.go.th
# Installation
You can install this package by using npm\
```
npm install thai-covid-report
```
# Usage
All of the example will be provided inside the Examples folder of this repo but here is the snippet of getting the amount of people who get infected today.
>todayInfected.js
```
//Import the package
const thaiCovid = require('thai-covid-report')

//Use the command to get amount of people who get infected on today
thaiCovid
    .getTodayInfected()
    .then(res => 
        {console.log('New confirmed infected case: ' + res)}
    )
```
# Credits
This package will not be possible without the public API from https://covid19.ddc.moph.go.th/ and [Axios](https://github.com/axios/axios)

# License
This package uses MIT license.