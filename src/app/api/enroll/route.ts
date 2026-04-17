import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, program, branch, message } = data;

    // VALIDATION
    if (!name || !phone || !program || !branch) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // EMAIL SERVICE INTEGRATION
    // Note for Tayyab: To make this send a real email, 
    // you would plug in a service like Resend or Nodemailer here.
    // Example (Using Resend):
    /*
    const { data, error } = await resend.emails.send({
      from: 'Enrollments <onboarding@resend.dev>',
      to: ['k.13.10.13@gmail.com'],
      subject: `New Enrollment: ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Program: ${program}
        Campus: ${branch}
        Message: ${message}
      `,
    });
    */

    // Logging the enrollment for the developer terminal
    console.log("-----------------------------------------");
    console.log("NEW ENROLLMENT RECEIVED");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Program: ${program}`);
    console.log(`Branch: ${branch}`);
    console.log("-----------------------------------------");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enrollment API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
