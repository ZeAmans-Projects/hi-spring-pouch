import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, subject, message } = await req.json();

    const resend = getResend();

const { error } = await resend.emails.send({
      from: "Hi Spring <onboarding@resend.dev>",
      to: "zeaman73@gmail.com",
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry from Hi Spring Website</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr>

        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}