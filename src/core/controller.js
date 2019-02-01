const config = require('../config/config')
const Mailer = require('./mailer')
const CronRunner = require('./cron-runner')
const apiService = require('./api-service')
const domService = require('./dom-service')

function start() {
    const fn = () => apiService.getRemainingSeats(config.course.term, config.course.subject)
        .then(html => {
            const seatsRemaining = domService.getRemainingSeats(config.course.CRN, html)
            console.log(seatsRemaining, 'remaining seats')
            const mailer = new Mailer(config.mailer, config.recipients.mailAddresses, config.mailer.auth.user)
            return mailer.sendMail(getMessageText(seatsRemaining > config.course.threshold ? true : false, seatsRemaining))
        })
        .then(info => console.log(info))
        .catch(err => console.log(err))
    const cronRunner = new CronRunner(fn, config.cron.minutes)
    cronRunner.cron()
}


function getMessageText(isSuccessful, remaining) {
    return `${isSuccessful ? 'Success' : 'Nay'}  : ${remaining} remaining seats`
}

module.exports = {
    start
}