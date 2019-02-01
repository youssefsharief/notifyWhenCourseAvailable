module.exports = {
    mailer: {
        service: 'Gmail',
        auth: {
            user: process.env.mailerUser,
            pass: process.env.mailerPass
        }
    },
    course: {
        CRN: 32535,
        threshold: 0,
        term: '201920',
        subject: 'FINC',
    },
    recipients: {
        mailAddresses: ['sharief@aucegypt.edu', 'raneemsherif@aucegypt.edu']
    },
    cron: {
        minutes: 15
    }

}