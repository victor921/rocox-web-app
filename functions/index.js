const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Nodemailer configuration with Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

// Twilio configuration
const twilioClient = new twilio(process.env.TWILIO_SID || '', process.env.TWILIO_TOKEN || '');

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    await transporter.sendMail({
      from: `"RocoX Contact" <${process.env.SMTP_FROM_EMAIL || ''}>`,
      to: process.env.SMTP_TO_EMAIL || '',
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
        from: process.env.TWILIO_FROM || '',
        to: process.env.TWILIO_TO || '',
      });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

exports.api = functions.https.onRequest(app);