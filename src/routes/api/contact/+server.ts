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
      to: 'debjyotimohapatra.work@gmail.com',
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : 'Contact enquiry from portfolio website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 14px; color: #6c757d;">
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Portfolio Website Contact Form</p>
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
