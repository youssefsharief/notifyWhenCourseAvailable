var nodemailer = require('nodemailer');

module.exports =  class {
    constructor(mailerConfig, recipientMailAddresses, senderEmailAddress ) {
        this.transporter = nodemailer.createTransport(mailerConfig);
        this.recipientMailAddresses = recipientMailAddresses
        this.senderEmailAddress = senderEmailAddress
    }

    sendMail(messageText){
        return new Promise((resolve, reject)=>{
            let mailOptions = {
                from: this.senderEmailAddress, 
                to: this.recipientMailAddresses, 
                subject: messageText, 
                text: messageText,
                html: messageText,
            };
            this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) return reject(error)
                else return resolve(info)
            });
        })
        
    }
}

// from: config.mailer.auth.user, // sender address
// to: recipientConfig.mailAddresses, // list of receivers
