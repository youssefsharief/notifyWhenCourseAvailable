const { By } = require('selenium-webdriver')
const { driver } = require('./build')
const { sendMail } = require('./mailer')




module.exports = {

    getRemaining(crn) {
        return new Promise((resolve, reject) => {
            driver.findElements(By.css('tr')).then(rows => {
                rows.forEach(row => {
                    row.findElements(By.css('a')).then(items => {
                        items.forEach(x => x.getText().then(text => {
                            if (text == crn) row.findElement(By.css('td:nth-child(12)')).then(cell => {
                                cell.getText().then(text=>{
                                    console.log(text)
                                    resolve(text)
                                })
                            })
                        }))
                    })
                })
            })
        })
    }

}


