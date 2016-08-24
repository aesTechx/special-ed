var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport ({
  service: 'service provide',
  auth: {
    user: 'aestechx@gmail.com',
    pass: process.env.gmailPass
  }
}));

module.exports = function(mailOptions) {
  mailOptions.from = mailOptions.from || 'Name <aesTechx@gmail.com>';
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
};