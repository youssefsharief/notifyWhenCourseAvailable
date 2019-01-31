require('dotenv').config()
const getRemainingSeats = require('./core/request')
const { CRN, threshold, term } = require('./config/course.config')
const { sendMail } = require('./core/mailer')
const CronJob = require('cron').CronJob;

// new CronJob('0 */15 * * * * ', function () {
    getRemainingSeats(CRN, term)
        .then(remaining => {
                console.log('remaining', remaining)
                return sendMail(getMessageText(remaining > threshold ? true : false, remaining))
        })

        .then(info => console.log(info))
        .catch(err => console.log(err))
// }, null, true, 'America/Los_Angeles');


function getMessageText(isSuccessful, remaining) {
       return isSuccessful? `Success: ${remaining} remaining seats`: `Nay: ${remaining} remaining seats`
}