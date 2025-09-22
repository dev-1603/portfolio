import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Email configuration
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: env.EMAIL_USER || 'debjyotimohapatra.work@gmail.com',
    pass: env.EMAIL_PASS || 'suumphznagybyfmt' // You'll need to set this in your environment variables
  },
  tls: {
    rejectUnauthorized: false
  }
};

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter verification failed:', error);
  } else {
    console.log('Email transporter is ready to send messages');
  }
});

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
  try {
    const { name, email, subject, message } = await request.json();

    // Debug: Check if environment variables are loaded
    console.log('Environment check:', {
      hasEmailUser: !!env.EMAIL_USER,
      hasEmailPass: !!env.EMAIL_PASS,
      emailUser: env.EMAIL_USER,
      emailPassLength: env.EMAIL_PASS?.length || 0
    });

    // Validate required fields
    if (!name || !email || !message) {
      return json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email credentials are available
    if (!env.EMAIL_PASS) {
      return json(
        { 
          error: 'Email service not configured. Please set EMAIL_PASS environment variable.',
          details: 'Missing EMAIL_PASS in environment variables'
        },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${EMAIL_CONFIG.auth.user}>`,
      to: 'debjyotimohapatra.work@gmail.com',
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : 'Contact enqury from portfolio website',
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

    console.log('Mail paswordcheck:', (env.EMAIL_PASS?.length +24)/10);
    // Send email
    await transporter.sendMail(mailOptions);

    return json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    const errorMessage = (error as Error).message;
    let userMessage = 'Failed to send email. Please try again later.';
    
    // Provide more specific error messages
    if (errorMessage.includes('Missing credentials')) {
      userMessage = 'Email service not configured properly. Please check your email settings.';
    } else if (errorMessage.includes('Invalid login')) {
      userMessage = 'Email authentication failed. Please check your email credentials.';
    } else if (errorMessage.includes('ECONNREFUSED')) {
      userMessage = 'Unable to connect to email server. Please try again later.';
    }
    
    return json(
      { 
        error: userMessage,
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
};
