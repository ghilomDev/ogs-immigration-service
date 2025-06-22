'use server';

import { sendEmailFromServer } from '@/lib/email-server';

export async function sendContactEmails(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const { name, email, phone, service, message } = data;

  try {
    console.log('[Server Action] Starting email sending process');
    console.log(`[Server Action] Sending confirmation email to: ${email}`);

    // Send confirmation email to the user
    const userEmailResponse = await sendEmailFromServer({
      to: email,
      subject: 'We’ve Received Your Inquiry – OGS Immigration',
      message: `
    <div style="background-color: #f9f9f9; padding: 40px 0; font-family: Arial, sans-serif; color: #333;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 6px; padding: 40px;">
              
              <!-- Logo -->
              <tr>
                <td align="center" style="padding-bottom: 30px;">
                  <img src="https://www.merccy.com/images/logo-2.svg" alt="OGS Immigration" width="150" style="display: block;" />
                </td>
              </tr>

              <!-- Heading -->
              <tr>
                <td style="font-size: 22px; font-weight: bold; padding-bottom: 10px; color: #2c3e50;">
                  Thank You for Contacting Us
                </td>
              </tr>

              <!-- Message Body -->
              <tr>
                <td style="font-size: 16px; line-height: 1.6; padding-bottom: 20px;">
                  Hi ${name},<br/><br/>
                  Thank you for reaching out to <strong>OGS Immigration</strong>. We’ve received your inquiry and a team member will contact you shortly to assist you further.
                </td>
              </tr>

              <!-- Submission Summary -->
              <tr>
                <td style="padding: 20px; background-color: #f1f1f1; border-radius: 4px;">
                  <table role="presentation" width="100%" cellpadding="5" cellspacing="0" style="font-size: 15px; color: #333;">
                    <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
                    <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                    <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
                    <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
                    <tr><td style="vertical-align: top;"><strong>Message:</strong></td><td>${message}</td></tr>
                  </table>
                </td>
              </tr>

              <!-- Add to Contact Button -->
              <tr>
                <td align="center" style="padding-top: 30px;">
                  <a href="https://www.merccy.com/contacts/OGS-Contact.vcf" download style="background-color: #2c3e50; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 16px;">
                    📇 Add to Contacts
                  </a>
                </td>
              </tr>

              <!-- Closing -->
              <tr>
                <td style="font-size: 16px; line-height: 1.6; padding-top: 30px;">
                  We appreciate your interest and will get back to you as soon as possible.<br/><br/>
                  Best regards,<br/>
                  <strong>The OGS Immigration Team</strong>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="font-size: 12px; color: #888; text-align: center; padding-top: 40px;">
                  © ${new Date().getFullYear()} OGS Immigration · All rights reserved<br/>
                  <a href="https://www.merccy.com" style="color: #888; text-decoration: none;">www.merccy.com</a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  `,
    });

    console.log('[Server Action] User confirmation email sent successfully');

    // Also send notification to admin
    const adminEmail = process.env.ADMIN_EMAIL || 'ghilomyonathan@gmail.com';
    console.log(`[Server Action] Sending notification email to admin: ${adminEmail}`);
    const adminEmailResponse = await sendEmailFromServer({
      to: adminEmail,
      subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
      message: `
        <div style="background-color: #f9f9f9; padding: 20px 0; font-family: Arial, sans-serif; color: #333;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 6px; padding: 30px;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="font-size: 22px; font-weight: bold; padding-bottom: 20px; color: #2c3e50; border-bottom: 1px solid #e5e5e5;">
                      New Contact Form Submission
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 0;">
                      <table role="presentation" width="100%" cellpadding="8" cellspacing="0" style="font-size: 15px; color: #333;">
                        <tr><td width="120"><strong>Name:</strong></td><td>${name}</td></tr>
                        <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #2c3e50;">${email}</a></td></tr>
                        <tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}" style="color: #2c3e50;">${phone}</a></td></tr>
                        <tr><td><strong>Service:</strong></td><td>${service || 'Not specified'}</td></tr>
                        <tr>
                          <td style="vertical-align: top;"><strong>Message:</strong></td>
                          <td style="background-color: #f8f8f8; padding: 10px; border-radius: 4px; border-left: 4px solid #2c3e50;">${message || 'No message provided'}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Action Reminder -->
                  <tr>
                    <td style="padding-top: 20px; font-weight: bold; color: #2c3e50; border-top: 1px solid #e5e5e5;">
                      Please respond to this inquiry within 24 hours.
                    </td>
                  </tr>
                  
                  <!-- Date/Time -->
                  <tr>
                    <td style="font-size: 12px; color: #888; padding-top: 15px;">
                      Submitted: ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    console.log('[Server Action] Admin notification email sent successfully');

    return { success: true };
  } catch (error) {
    console.error('Failed to send email notifications:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error sending emails',
    };
  }
}
