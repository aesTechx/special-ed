var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport ({
  service: "service provide",
  auth: {
        user: 'email@example.com',
        pass: process.env.outlookPass
  }
}));

module.exports = function(mailOptions){
  mailOptions.from =  mailOptions.from || 'Name <mail@example.com>';
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
       console.log(error);
    }else{
    console.log('Message sent: ' + info.response);
    }
  });
};



