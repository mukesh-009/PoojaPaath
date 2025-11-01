const nodemailer = require('nodemailer');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send booking confirmation email
const sendBookingEmail = async ({ bookingId, name, phone, poojaName, preferredDate }) => {
  try {
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: `"PoojaPaath Bookings" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking Request - ${poojaName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">New Booking Request</h2>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Pooja Selected:</strong> ${poojaName}</p>
          ${preferredDate ? `<p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>` : ''}
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">Please contact the customer to confirm the booking details.</p>
        </div>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: `"PoojaPaath" <${process.env.EMAIL_USER}>`,
      to: phone, // You might want to collect email from customer
      subject: 'Booking Request Received - PoojaPaath',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Thank You for Your Booking Request!</h2>
          <p>Dear ${name},</p>
          <p>We have received your booking request for <strong>${poojaName}</strong>.</p>
          <p>Our team will contact you shortly at <strong>${phone}</strong> to confirm the booking details and pandit assignment.</p>
          ${preferredDate ? `<p><strong>Your Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>` : ''}
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">For any queries, feel free to reach out to us via WhatsApp.</p>
          <p style="color: #6b7280; font-size: 14px;">Best regards,<br>Team PoojaPaath</p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    
    // Only send customer email if we have their email
    // For now, we're using phone, so skip customer email or implement SMS
    // await transporter.sendMail(customerMailOptions);

    console.log('Booking emails sent successfully');
  } catch (error) {
    console.error('Error sending booking email:', error);
    throw error;
  }
};

module.exports = {
  sendBookingEmail,
};
