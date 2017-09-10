
console.log('running sel')

const CronJob = require('cron').CronJob;
new CronJob('0 */15 * * * * ', function () {
    const { doTask } = require('./selenium')
    doTask()
}, null, true, 'America/Los_Angeles');
