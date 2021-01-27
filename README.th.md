# Thai-Covid-Report ([EN](https://github.com/RealFilllykung/Thai-Covid-Report/blob/main/README.md)/[TH](https://github.com/RealFilllykung/Thai-Covid-Report/blob/main/README.th.md))
โปรเจคนี้สร้างมาเพื่่อ developer ให้ได้เรียกข้อมูลเกี่ยวกับสถานการณ์ covid จาก https://covid19.ddc.moph.go.th/ ได้ง่ายขึ้น
# วิธีลง
สามารถลง package นี้โดยใช้ npm
```
npm install thai-covid-report
```
# ตัวอย่างการใช้
ตัวอย่างการใช้ทั้งหมดอยู่ใน folder Examples และหน้า [wiki page](https://github.com/RealFilllykung/Thai-Covid-Report/wiki) ของ repo อันนี้\
ในตัวอย่างนี้ผมจะเรียกข้อมูลจำนวนคนที่ติดเชื่อในวันนี้

**getTodayInfected() example**
```javascript
//Import package
const thaiCovid = require('thai-covid-report')

//ใช้ command นี้เพื่อเอาจำนวนคนติดเชื้อวันนี้
thaiCovid
    .getTodayInfected()
    .then(res => 
        {
            //res return ค่าเป็น integer
            const newInfected = res
            console.log('Today confirmed case: ' + newInfected)
        }
    )
```
# Documentation ตัวเต็ม
Documentation ตัวเต็มและตัวอย่างใช้งานสามารถหาดูได้ในหน้า [wiki page](https://github.com/RealFilllykung/Thai-Covid-Report/wiki) อันนี้
# เครดิต
ต้องขอขอบคุณทาง contributors ทุกคนที่ทำเว็บไซต์และ API จากเว็บ https://covid19.ddc.moph.go.th/ และ [Axios](https://github.com/axios/axios) ครับผม
# License
Project ตัวนี้ใช้ license MIT.