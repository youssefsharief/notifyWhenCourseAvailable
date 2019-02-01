const CronJob = require('cron').CronJob;

module.exports = class {
    constructor(fn, timeInMinutes) {
        this.fn = fn
        this.timeInMinutes = timeInMinutes
    }
    cron() {
        return new CronJob(`0 */${this.timeInMinutes} * * * * `,  this.fn, null, true);
    }
}
