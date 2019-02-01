const cronRunner = require('./cron-runner.js')
const sinon = require('sinon');

describe('cron runner', () => {
    fit('should log something', () => {
        const clock = sinon.useFakeTimers();
		let c = 0;
        const callback = () => c ++
        const minutes = 15
        const cr = new cronRunner(callback, minutes)
        const job =  cr.cron()
        clock.tick(minutes * 60 * 1000 + 20);
        job.stop();
		clock.restore();
		expect(c).toBe(1);
    });

});