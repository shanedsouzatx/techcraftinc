import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email"; // Import the reusable function

export async function POST(req: Request) {
  try {
    const { 
      name, 
      email, 
      phone, 
      message, 
      budget,
      packageName,
      captcha 
    } = await req.json();

    // Verify CAPTCHA
    if (!captcha) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA verification failed" }, 
        { status: 400 }
      );
    }

    // Create email content with all form fields
    const emailContent = `
      New Package Inquiry:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Selected Package: ${packageName}
      Budget Range: ${budget}
      Message: ${message}
      
      Submitted via: Package Inquiry Form
    `;

    const response = await sendEmail(
      "signups@techcraftinc.com",
      "New Package Inquiry Form Submission",
      emailContent
    );

    return NextResponse.json(response, { status: response.success ? 200 : 500 });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, message: "Failed to send email" }, 
      { status: 500 }
    );
  }
}
