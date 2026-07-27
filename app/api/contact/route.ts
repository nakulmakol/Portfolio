import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL ?? "nakulmakol14@gmail.com",
          subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
          html: `<div style="font-family:sans-serif;max-width:600px">
            <h2 style="color:#3B82F6">New message from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "(none)"}</p>
            <hr style="border-color:#2A313C;margin:20px 0"/>
            <p style="white-space:pre-wrap">${message}</p>
          </div>`,
        }),
      });
    }

    console.log(`Contact form: ${name} <${email}> — ${subject}`);
    return NextResponse.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
