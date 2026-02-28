import { Resend } from "resend";

interface ContactEmailParams {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  company,
  message,
}: ContactEmailParams) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const { data, error } = await resend.emails.send({
    from: "Kinetic.codes Contact <onboarding@resend.dev>",
    to: [contactEmail],
    replyTo: email,
    subject: `New Contact from ${name}${company ? ` (${company})` : ""}`,
    text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}
Message:
${message}
    `.trim(),
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ffff;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <hr style="border: 1px solid #333; margin: 20px 0;" />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    throw error;
  }

  return data;
}
