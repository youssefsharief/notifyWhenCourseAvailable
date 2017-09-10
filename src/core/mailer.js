var nodemailer = require('nodemailer');
const config = require('../config/mailer.config.js')
let transporter = nodemailer.createTransport(config.mailer);

function sendMail(bool, remaining){
    
    return new Promise((resolve, reject)=>{
        let mailOptions = {
            from: 'node.mailer.webdriver@gmail.com', // sender address
            to: ['sharief@aucegypt.edu', 'raneemsherif@aucegypt.edu'], // list of receivers
            subject: bool? `Success: ${remaining} remaining seats`: `Nay: ${remaining} remaining seats`, // Subject line
            text: bool? `Success: ${remaining} remaining seats`: `Nay: ${remaining} remaining seats`, // plaintext body
            html: bool? `Success: ${remaining} remaining seats`: `Nay: ${remaining} remaining seats`,// html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return reject(error)
            else return resolve(info)
        });
    })
    
}


module.exports = {sendMail }