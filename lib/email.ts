/**
 * Utility function to send emails through the Resend API
 */
export const sendEmail = async ({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log('Sending email to:', to);
    
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, message }),
    });

    // First, log the raw response status
    console.log('Email API response status:', res.status, res.statusText);
    
    // Try to parse the JSON response
    let data;
    try {
      data = await res.json();
      console.log('Email API response data:', JSON.stringify(data));
    } catch (jsonError) {
      console.error('Failed to parse JSON response:', jsonError);
      // If we can't parse JSON, try to get the text response
      const textResponse = await res.text().catch(() => 'No text response');
      console.log('Raw API response:', textResponse);
      throw new Error(`API returned invalid JSON (status ${res.status}): ${textResponse.substring(0, 200)}`);
    }
    
    // Check for both top-level success and nested errors in data.data.error
    if (!data.success || (data.data && data.data.error)) {
      const errorDetails = data.error || (data.data && data.data.error) || 'Unknown error';
      console.error('Email API error:', errorDetails);
      throw new Error(`Failed to send email: ${JSON.stringify(errorDetails)}`);
    }

    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Non-Error object thrown:', error);
    }
    throw error;
  }
};
