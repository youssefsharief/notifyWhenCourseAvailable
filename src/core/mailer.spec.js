const mailer = require('./mailer.js')
require('dotenv').config()

xdescribe('mailer', () => {
    it('should send a test email', async () => {
        const m = new mailer({
            service: 'Gmail',
            auth: {
                user: process.env.mailerUser,
                pass: process.env.mailerPass
            }
        }, ['sharief@aucegypt.edu'], process.env.mailerUser)

        await m.sendMail('a test')
    });
    
});