const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: "Alyssa <alyssab@missionreadyhq.com",
  to: "cicibarrett@gmail.com",
  subject: "Test",
  text: "",
  html: "<h1>I love you 💜 </h1>",
};

transporter.sendMail(mailOptions);
