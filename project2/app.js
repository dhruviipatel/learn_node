const nmailer = require('nodemailer')

const transport = nmailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dhruvi.244210@gmail.com',
        pass: 'bytsjskslpjvrwny'
    }
})
let messageObject = {
    from: 'dhruvi.244210@gmail.com',
    to: 'dhruvi.digitalinovation@gmail.com',
    subject: 'Email sending using node js',
    text: 'this is node message'
}

transport.sendMail(messageObject, (err, info) => {
    if (err) {
        console.log('error: ' + err)
    } else {
        console.log('mail sent ');
        console.log(info);
    }
})