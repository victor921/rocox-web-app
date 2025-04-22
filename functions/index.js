const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

const twilioClient = new twilio(functions.config().twilio.sid, functions.config().twilio.token);

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    await transporter.sendMail({
      from: `"RocoX Contact" <${functions.config().email.user}>`,
      to: functions.config().email.user,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Message: ${message}
      `,
    });

    if (phone) {
      await twilioClient.messages.create({
        body: `New contact from ${name}: ${message.substring(0, 100)}...`,
        from: functions.config().twilio.from,
        to: functions.config().twilio.to,
      });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

exports.api = functions.https.onRequest(app);