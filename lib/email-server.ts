'use server';

import { Resend } from 'resend';

/**
 * Server-side function to send emails directly through Resend API
 */
export async function sendEmailFromServer({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) {
  try {
    console.log('[Server] Sending email to:', to);

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = 'no-reply@merccy.com';

    if (!RESEND_API_KEY) {
      console.error('[Server] Missing Resend API key');
      throw new Error('Missing Resend API key');
    }

    // Create a new Resend instance
    const resend = new Resend(RESEND_API_KEY);

    // Format the HTML content
    const html = message.startsWith('<') ? message : `<p>${message}</p>`;

    // Send the email
    console.log('[Server] Calling Resend API with:', { from: FROM_EMAIL, to });
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    console.log('[Server] Resend API response:', { data, error });

    if (error) {
      console.error('[Server] Resend API error:', error);
      throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error('[Server] Error sending email:', error);
    if (error instanceof Error) {
      console.error('[Server] Error message:', error.message);
      console.error('[Server] Error stack:', error.stack);
    }
    throw error;
  }
}
