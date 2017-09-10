const {By} = require('selenium-webdriver')
const {driver} = require('./build')




module.exports = {
    choseSubject(){
        driver.findElement(By.id('subj_id')).sendKeys('Accounting');
    },
    submit(){
        driver.findElement(By.id('id____UID0')).click()
    }
}