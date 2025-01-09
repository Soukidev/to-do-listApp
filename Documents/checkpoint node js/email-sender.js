// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using your email provider's SMTP details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',  // replace with your email
    pass: 'your-email-password'    // replace with your password
  }
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@gmail.com',  // replace with recipient's email
  subject: 'Hello from Node.js',
  text: 'This is a test email sent using Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
