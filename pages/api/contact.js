import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);




export default function handler(req, res) {
  
   if (req.method === 'POST') {
    console.log('Received contact form data:', req.body);
    resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'aaron.nylund2@gmail.com',
  subject: ' New Contact Form Submission',
  html: '<p>Name: ' + req.body.name + '</p><p>Email: ' + req.body.email + '</p><p>Message: ' + req.body.message + '</p>',
});
res.status(200).json({ message: 'Hello from Ne222xt.js!' })
  } else {
    res.status(400).json({ message: 'Hello from N33ext.js!' })
    // Handle any other HTTP method
  }
  
}   



