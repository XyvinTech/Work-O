import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
   const username = "info@workoindia.com";
  const password = "wgzf arlp sfwv abre";
  const formData = await request.formData();
  const userEmail = formData.get("email");
  const firstName = formData.get("firstName") || "";
  const lastName = formData.get("lastName") || "";

  const fullName = `${firstName} ${lastName}`.trim();
  const fields = [
    { label: "Name", value: fullName },
    { label: "Full Name", value: formData.get("fullname") },
    { label: "Email", value: userEmail },
    { label: "Message", value: formData.get("message") },
    { label: "Selected Form", value: formData.get("selectedForm") },
    { label: "State", value: formData.get("state") },
    { label: "District", value: formData.get("district") },
    { label: "Phone Number", value: formData.get("phoneNumber") },
    { label: "Courses", value: formData.getAll("courses[]").join(", ") },
    { label: "Partner Name", value: formData.get("partnerName") },
    { label: "CompanyId", value: formData.get("companyId") },
    { label: "Service", value: formData.get("service") },
  ];
  const emailContent = fields
    .filter(({ value }) => value && value !== "undefined" && value !== "null") 
    .map(({ label, value }) => `<p>${label}: ${value}</p>`)
    .join("");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: userEmail,
      to: username,
      subject: `Website activity from ${userEmail}`,
      html: emailContent,
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
