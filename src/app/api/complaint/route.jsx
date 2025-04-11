import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = "workofoundation@gmail.com";
  const password = "ewoq pjhj eawf ggxy";

  const formData = await request.formData();
  const userEmail = formData.get("email");

  const fields = [
    { label: "Full Name", value: formData.get("fullName") },
    { label: "Email", value: userEmail },
    { label: "Phone Number", value: formData.get("phoneNumber") },
    { label: "State", value: formData.get("state") },
    { label: "District", value: formData.get("district") },
    { label: "Complaint Type", value: formData.get("complaintType") },
    { label: "Application Type", value: formData.get("appType") },
    { label: "Service", value: formData.get("service") },
    {
      label: "Service Provider Name",
      value: formData.get("serviceProviderName"),
    },
    { label: "Description", value: formData.get("description") },
  ];

  const emailContent = `
    <h2>New Complaint Submission</h2>
    ${fields
      .filter(({ value }) => value && value !== "undefined" && value !== "null")
      .map(({ label, value }) => `<p><strong>${label}:</strong> ${value}</p>`)
      .join("")}
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Complaint Form" <${username}>`,
      to: username,
      subject: `Complaint Submission from ${userEmail}`,
      html: emailContent,
    });

    return NextResponse.json({ message: "Success: Complaint submitted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to submit complaint" },
      { status: 500 }
    );
  }
}
