const { By} = require('selenium-webdriver')
const {driver} = require('./build')



module.exports = {
    goToPage(){
        driver.get('https://ssb.aucegypt.edu:4444/PROD/bwckschd.p_disp_dyn_sched');
    },
    choseSemester(){
        driver.findElement(By.id('term_input_id')).sendKeys('Fall 2017');        
    },
    submit(){
        driver.findElement(By.id('id____UID0')).click()
    }
}





// document.querySelector('#term_input_id [value="201810"]').selected = true
// $('#term_input_id').val(201810)


// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();

