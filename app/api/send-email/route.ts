import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Create a new instance of Resend outside the request handler
let resendInstance: Resend | null = null;

export async function POST(req: Request) {
  try {
    // Log that we're starting to process the request
    console.log('Received email request');
    
    // Try to parse the JSON body
    let to, subject, message;
    try {
      const body = await req.json();
      to = body.to;
      subject = body.subject;
      message = body.message;
      console.log('Email request parameters:', { to, subject });
    } catch (parseError) {
      console.error('Failed to parse request JSON:', parseError);
      return NextResponse.json({ 
        success: false, 
        error: "Invalid JSON in request" 
      }, { status: 400 });
    }

    // Validate required fields
    if (!to || !subject || !message) {
      console.error('Missing required fields:', { to: !!to, subject: !!subject, message: !!message });
      return NextResponse.json({ 
        success: false, 
        error: "Missing required fields" 
      }, { status: 400 });
    }

    // Check environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL;

    console.log('Environment variables check:', { 
      hasApiKey: !!RESEND_API_KEY, 
      fromEmail: FROM_EMAIL,
      apiKeyFirstFiveChars: RESEND_API_KEY ? RESEND_API_KEY.substring(0, 5) : 'none'
    });

    if (!RESEND_API_KEY || !FROM_EMAIL) {
      console.error("Missing environment variables", { 
        hasApiKey: !!RESEND_API_KEY, 
        fromEmail: FROM_EMAIL 
      });
      return NextResponse.json({ 
        success: false, 
        error: "Missing email configuration" 
      }, { status: 500 });
    }

    try {
      // Initialize the Resend instance lazily to ensure we always have the latest API key
      if (!resendInstance) {
        console.log('Creating new Resend instance with API key');
        resendInstance = new Resend(RESEND_API_KEY);
      }
      
      console.log('Sending email via Resend SDK to:', to);

      // Format the HTML content
      const html = message.startsWith('<') ? message : `<p>${message}</p>`;
      
      // Try using Resend's fixed "onboarding@resend.dev" email for testing
      // This is always allowed with any API key
      const fromEmail = 'onboarding@resend.dev';
      console.log('Using sender email:', fromEmail);
      
      const { data, error } = await resendInstance.emails.send({
        from: fromEmail,
        to,
        subject,
        html,
      });
      
      // Log the full response
      console.log('Resend SDK response:', { data, error });
      
      // Check for errors from the SDK
      if (error) {
        console.error(`Resend SDK error:`, error);
        
        return NextResponse.json({ 
          success: false, 
          error: { 
            message: error.message,
            statusCode: 500
          }
        }, { status: 500 });
      }
      
      // If we got here, it was actually successful
      console.log('Email sent successfully');
      return NextResponse.json({ success: true, data });
    } catch (resendError: any) {
      console.error('Resend SDK error:', resendError);
      
      // Extract meaningful error info
      const errorMessage = resendError?.message || 'Unknown error sending email';
      const errorCode = resendError?.statusCode || 500;
      const errorName = resendError?.name || 'Unknown';
      
      console.error(`Email sending failed: ${errorName} (${errorCode}): ${errorMessage}`);
      
      return NextResponse.json({ 
        success: false, 
        error: {
          message: errorMessage,
          code: errorCode,
          name: errorName
        }
      }, { status: errorCode || 500 });
    }
  } catch (error) {
    console.error("Unexpected error in email API route:", error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? { message: error.message } : "Unknown error" 
    }, { status: 500 });
  }
}
