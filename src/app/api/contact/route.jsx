import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_MAIL_ID;
  const password = process.env.NEXT_PUBLIC_PASS;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const selectedForm = formData.get("selectedForm");
  const state = formData.get("state");
  const district = formData.get("district");
  const phoneNumber = formData.get("phoneNumber");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: username,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Selected Form: ${selectedForm}</p>
        <p>State: ${state}</p>
        <p>District: ${district}</p>
        <p>Phone Number: ${phoneNumber}</p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
