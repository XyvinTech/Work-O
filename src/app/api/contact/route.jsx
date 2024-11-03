import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
 const username = 'workofoundation@gmail.com'
  const password = 'lvnj ryjr ckcz mesk'

  const formData = await request.formData();
  const name = formData.get("name");
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const message = formData.get("message");
  const selectedForm = formData.get("selectedForm");
  const state = formData.get("state");
  const district = formData.get("district");
  const phoneNumber = formData.get("phoneNumber");
  const courses = formData.getAll("courses[]");
  const partnerName = formData.get("partnerName");
  const companyId = formData.get("companyId");
  const service = formData.get("service");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });
  const emailContent = `
  ${name ? `<p>Name: ${name}</p>` : ""}
  ${fullname ? `<p>Full Name: ${fullname}</p>` : ""}
  ${email ? `<p>Email: ${email}</p>` : ""}
  ${message ? `<p>Message: ${message}</p>` : ""}
  ${selectedForm ? `<p>Selected Form: ${selectedForm}</p>` : ""}
  ${state ? `<p>State: ${state}</p>` : ""}
  ${district ? `<p>District: ${district}</p>` : ""}
  ${phoneNumber ? `<p>Phone Number: ${phoneNumber}</p>` : ""}
  ${courses ? `<p>Courses: ${courses}</p>` : ""}
  ${partnerName ? `<p>Partner Name: ${partnerName}</p>` : ""}
  ${companyId ? `<p>CompanyId: ${companyId}</p>` : ""}
   ${service ? `<p>Service: ${service}</p>` : ""}
`;
  try {
    await transporter.sendMail({
      from: email,
      to: username,
      subject: `Website activity from ${email}`,
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
