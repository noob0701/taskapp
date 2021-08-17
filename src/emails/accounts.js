const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akshatbahuguna@rapidinnovation.dev',
        subject: 'Welcome!!',
        text: `Welcome to the app ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akshatbahuguna@rapidinnovation.dev',
        subject: 'Sorry to see you go',
        text: `GoodBye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}