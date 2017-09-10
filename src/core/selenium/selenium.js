const choseSemesterPage = require('./chose_semester.po')
const choseCoursePage = require('./chose_course.po')
const tablePage = require('./table.po')
const { sendMail } = require('./mailer')
const {driver} = require('./build')





module.exports = {
    doTask() {
        choseSemesterPage.goToPage()
        choseSemesterPage.choseSemester()
        choseSemesterPage.submit()
        choseCoursePage.choseSubject()
        choseCoursePage.submit()

        tablePage.getRemaining(11188)
            .then(remaining => sendMail(remaining >= -7 ? 1 : 0, remaining))
            .then(info => {
                console.log('Message %s sent: %s', info.messageId, info.response)
                // driver.close() 
            })
            .catch(err => {
                console.log(err)
                // driver.close()
            })
    }
}
