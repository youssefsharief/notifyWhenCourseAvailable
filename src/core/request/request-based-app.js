const getRemainingSeats = require('./request')
const { CRN, threshold } = require('../config/course.config')
const { sendMail } = require('../mailer/mailer')
const CronJob = require('cron').CronJob;

console.log('running request')

new CronJob('0 */15 * * * * ', function () {
    getRemainingSeats(CRN)
        .then(remaining => sendMail(remaining > threshold ? true : false, remaining))
        .then(info => console.log(info))
        .catch(err => console.log(err))
}, null, true, 'America/Los_Angeles');
