import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}
// Common CORS headers for preflight and responses
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

// Simple GET for smoke-testing the endpoint in production
export const GET: RequestHandler = async () => {
  return json({ ok: true }, { status: 200, headers: CORS_HEADERS });
};

// Handle preflight requests
export const OPTIONS: RequestHandler = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { error: 'Invalid email format' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (!env.EMAIL_USER || !env.EMAIL_PASS) {
      return json(
        { error: 'Email service not configured. Please set EMAIL_USER and EMAIL_PASS environment variables.' },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"${name}" <${env.EMAIL_USER}>`,
      to: 'mohapatra.dev02@gmail.com',
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : 'Contact enquiry from portfolio website',
      html: `
       <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">


  <div style="background-color: #0f172a; padding: 30px 30px; border-bottom: 4px solid #3b82f6;">
    <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
      New Contact Request
    </h2>
    <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 15px;">
      You have a new message from your portfolio website.
    </p>
  </div>


  <div style="padding: 30px;">

    <!-- Contact Info Section -->
    <div style="margin-bottom: 30px;">
      <h3 style="color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1.2px; margin: 0 0 15px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
        Sender Details
      </h3>

      <!-- Using a table for reliable alignment in all email clients -->
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; color: #64748b; width: 90px; font-weight: 600;">Name:</td>
          <td style="padding: 10px 0; color: #1e293b; font-weight: 500;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-top: 1px solid #f1f5f9;">Email:</td>
          <td style="padding: 10px 0; border-top: 1px solid #f1f5f9;">
            <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${email}</a>
          </td>
        </tr>
        ${subject ? `
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-weight: 600; border-top: 1px solid #f1f5f9;">Subject:</td>
          <td style="padding: 10px 0; color: #1e293b; font-weight: 500; border-top: 1px solid #f1f5f9;">${subject}</td>
        </tr>
        ` : ''}
      </table>
    </div>


    <div>
      <h3 style="color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1.2px; margin: 0 0 15px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
        Message
      </h3>
      <div style="background-color: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; font-size: 16px; line-height: 1.7; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
    
  </div>


  <div style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 13px;">
      <strong>Timestamp:</strong> ${new Date().toLocaleString()}
    </p>
    <p style="margin: 0; color: #94a3b8; font-size: 12px;">
      This email was generated automatically by your portfolio contact form.
    </p>
  </div>

</div>
      `,
      text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
${subject ? `- Subject: ${subject}` : ''}

Message:
${message}

Timestamp: ${new Date().toLocaleString()}
Source: Portfolio Website Contact Form
      `
    };

    await transporter.sendMail(mailOptions);

    return json(
      { success: true, message: 'Email sent successfully' },
      { status: 200, headers: CORS_HEADERS }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    const errorMessage = (error as Error).message;
    let userMessage = 'Failed to send email. Please try again later.';

    if (errorMessage.includes('Missing credentials')) {
      userMessage = 'Email service not configured properly.';
    } else if (errorMessage.includes('Invalid login')) {
      userMessage = 'Email authentication failed.';
    } else if (errorMessage.includes('ECONNREFUSED')) {
      userMessage = 'Unable to connect to email server. Please try again later.';
    }

    return json(
      { error: userMessage },
      { status: 500, headers: CORS_HEADERS }
    );
  }
};
