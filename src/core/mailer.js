var nodemailer = require('nodemailer');
const config = require('../config/mailer.config.js')
const recipientConfig = require('../config/recipients.config.js')
let transporter = nodemailer.createTransport(config.mailer);

function sendMail(messageText){
    return new Promise((resolve, reject)=>{
        let mailOptions = {
            from: config.mailer.auth.user, // sender address
            to: recipientConfig.mailAddresses, // list of receivers
            subject: messageText, // Subject line
            text: messageText, // plaintext body
            html: messageText,// html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return reject(error)
            else return resolve(info)
        });
    })
    
}


module.exports = { sendMail }