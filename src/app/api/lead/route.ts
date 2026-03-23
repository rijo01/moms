export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Namn och e-post krävs." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "momsraknare.se <noreply@momsraknare.se>",
      to: process.env.LEAD_EMAIL_TO || "din@email.se",
      subject: `Nytt lead från momsraknare.se — ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nMeddelande: ${message || "–"}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
