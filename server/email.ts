import sgMail from '@sendgrid/mail';

// Initialize SendGrid with the API key
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Send contact form submission via email
 */
export async function sendContactFormEmail(data: EmailData): Promise<boolean> {
  try {
    // Using the recipient email as the sender (this must be verified in SendGrid)
    // For SendGrid, you'll need to verify 'icodewithlola@gmail.com' as a sender
    const msg = {
      to: 'icodewithlola@gmail.com',
      from: 'icodewithlola@gmail.com', // Using your own email as sender
      subject: `Portfolio Contact Form: Message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: data.email
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}