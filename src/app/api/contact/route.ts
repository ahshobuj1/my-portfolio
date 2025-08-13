import {NextResponse} from 'next/server';
import {TContactForm} from '../../../../public/types';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body: TContactForm = await request.json();
  const {email, firstName, lastName, projectType, message} = body;

  try {
    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {error: 'Missing required fields!'},
        {status: 400}
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({error: 'Invalid email format'}, {status: 400});
    }

    console.log('[email:]', process.env.EMAIL_USER);
    console.log('[pass :]', process.env.EMAIL_PASS);

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create unique message ID for threading
    const messageId = `contact-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}@portfolio.com`;

    // Email options (to yourself)
    const mailOptions = {
      from: process.env.EMAIL_USER, // User's email as sender
      to: process.env.EMAIL_USER, // my gmail
      subject: `Portfolio Contact: ${projectType?.toUpperCase()}`,
      messageId: messageId,
      // replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0 auto;">
          <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #495057;">Name:</strong> ${firstName} ${lastName}</p>
            <p><strong style="color: #495057;">Email:</strong> ${email}</p>
            <p><strong style="color: #495057;">Subject:</strong> ${projectType}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <hr style="border: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      // Reply-to sender's email
      replyTo: email,
    };

    // Send email to yourself
    await transporter.sendMail(mailOptions);

    // Send acknowledgment email to user (as a reply)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // user's email
      subject: `THANKS ${firstName.toUpperCase()} ${lastName.toUpperCase()} - LOOKING FORWARD TO OUR COLLABORATION`,
      inReplyTo: messageId, // Reference to original message
      references: messageId,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">I've received your message</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <p>Hi <strong style={{ textTransform: 'uppercase' }}>${firstName} ${lastName}</strong>,</p>
        
        <p>Thank you for reaching out through my portfolio! I've received your message about "<strong style={{ textTransform: 'uppercase' }}>${projectType}</strong>" and I really appreciate you taking the time to contact me.</p>
        
        <p><strong>What happens next?</strong></p>
        <ul style="color: #495057; padding-left: 20px;">
          <li>I'll review your message carefully</li>
          <li>You can expect a personal response within 24-48 hours</li>
          <li>I'll reach out to discuss your <strong style={{ textTransform: 'uppercase' }}>${projectType}</strong> project/opportunity in detail</li>
          <li>We can schedule a quick discovery call if it's a good fit</li>
        </ul>
        
        <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0; color: #0c5460;"><strong>💼 Let's build something amazing together!</strong></p>
        </div>
        
        <!-- Contact Information Section -->
        <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #495057; text-align: center;">📞 Get in Touch</h3>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-around; gap: 15px;">
            <div style="text-align: center; min-width: 120px;">
              <p style="margin: 5px 0; color: #007bff;"><strong>📱 Phone</strong></p>
              <p style="margin: 0; color: #495057;">01318-357290</p>
            </div>
            
            <div style="text-align: center; min-width: 120px;">
              <p style="margin: 5px 0; color: #007bff;"><strong>💻 LinkedIn</strong></p>
              <p style="margin: 0; color: #495057;"><a href="https://linkedin.com/in/ahshobuj" style="color: #007bff; text-decoration: none;">Connect</a></p>
            </div>

            <div style="text-align: center; min-width: 120px;">
              <p style="margin: 5px 0; color: #007bff;"><strong> Github</strong></p>
              <p style="margin: 0; color: #495057;"><a href="https://linkedin.com/in/ahshobuj" style="color: #007bff; text-decoration: none;">Connect</a></p>
            </div>

          </div>
          <div style="text-align: center; margin-top: 15px;">
            <p style="margin: 5px 0; color: #007bff;"><strong>🌐 Portfolio</strong></p>
            <p style="margin: 0; color: #495057;"><a href="https://ahshobuj.vercel.app/" style="color: #007bff; text-decoration: none;">View My Work</a></p>
          </div>
        </div>
        
        <!-- Professional Signature -->
        <div style="text-align: center; padding: 20px 0;">
          <p style="margin: 5px 0;"><strong style="font-size: 18px;">Best regards,</strong></p>
          <p style="margin: 5px 0;"><strong style="color: #007bff; font-size: 20px;">ABDUL AHI SHOBUJ</strong></p>
          <p style="margin: 5px 0; color: #6c757d;">Full Stack Developer | MERN Stack Specialist</p>
          <p style="margin: 5px 0; color: #6c757d;">React • Next.js • Node.js • MongoDB • Express</p>
        </div>
        
        <hr style="border: 1px solid #dee2e6; margin: 30px 0;">
        <p style="color: #6c757d; font-size: 14px; text-align: center;">
          // This is an automated confirmation email. I'll personally respond to your inquiry soon!<br>
          For urgent matters, feel free to call or message me directly.
        </p>
      </div>
    </div>
  `,
      replyTo: process.env.EMAIL_USER,
    };

    // Send acknowledgment email
    await transporter.sendMail(userMailOptions);

    // send response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! Check your email for confirmation',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log('[error from sending email: ]', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message, Please try again later.',
      },
      {
        status: 500,
      }
    );
  }
}
