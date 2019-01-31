module.exports = {
    mailer: {
        service: 'Gmail',
        auth: {
            user: process.env.mailerUser,
            pass: process.env.mailerPass
        }
    }
}