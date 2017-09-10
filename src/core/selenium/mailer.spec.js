const { sendMail } = require('./mailer')

sendMail(1,5).then(info=>{
    console.log(info)
    
})
.catch(err=>console.log(err))