const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'front')));

app.post('/', (request, response) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    var textBody = `FROM: ${request.body.name}  `;
    var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.phone}</p><p>${request.body.message}</p>`;
    var mail = {
        from: "your_account@gmail.com",
        to: "vicalish@gmail.com",
        subject: "Mail From Contact Form",
        text: textBody,
        html: htmlBody
    };

    transporter.sendMail(mail, (err, info) => {
        if (err) {
            console.log(err);
            response.json({ message: "an error occured; check the sserver's console log" })
        } else console.log(response.json({ message: `message sent with ID: ${info.messageId}` }));
    })
});

app.listen(8000, () => console.log('listening on port 8000'))