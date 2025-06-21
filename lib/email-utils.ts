'use client';

import { sendContactEmails } from '@/app/actions/email';

/**
 * A reusable function to send emails after a form submission
 * This sends emails asynchronously with a delay and doesn't block the UI
 *
 * @param emailData The data needed to send the emails
 * @param delayMs The delay in milliseconds before sending the email (default: 100ms)
 * @returns A promise that resolves when the email sending is initiated
 */
export const sendEmailsAfterSubmission = (
  emailData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  },
  delayMs: number = 100
): Promise<void> => {
  return new Promise(resolve => {
    // This initiates the email sending after the specified delay
    setTimeout(() => {
      // Use try-catch inside the setTimeout to handle errors within the async function
      (async () => {
        try {
          console.log('Sending confirmation and notification emails');
          const emailResult = await sendContactEmails(emailData);

          if (!emailResult.success) {
            console.error('Failed to send email notifications:', emailResult.error);
          } else {
            console.log('Emails sent successfully');
          }
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
        }
      })();

      // Resolve the promise immediately after initiating the email process
      // This allows the calling function to continue execution
      resolve();
    }, delayMs);
  });
};
