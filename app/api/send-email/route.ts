import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please set up RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email:', { name, email, messageLength: message.length });

    // Send email using Resend with improved deliverability
    const { data, error } = await resend.emails.send({
      from: 'Ananya Portfolio <onboarding@resend.dev>',
      to: ['b22ee008@iitj.ac.in'], // Using your verified email address
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email, // Allow direct replies to the sender
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background-color: #ec4899; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Portfolio Contact Form</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #333; margin-bottom: 20px;">New Message Received</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ec4899;">
              <p style="margin: 5px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #333;">Email:</strong> <span style="color: #666;">${email}</span></p>
              <p style="margin: 15px 0 5px 0;"><strong style="color: #333;">Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border: 1px solid #e0e0e0;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This message was sent from your portfolio contact form at <a href="https://your-portfolio-domain.com" style="color: #ec4899;">your-portfolio-domain.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Portfolio Contact Form - New Message

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 