import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required"),
    // Simple honeypot field, should be empty
    _gotcha: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            _gotcha: formData.get("_gotcha"),
        };

        // 1. Honeypot check (Spam protection)
        // If the honeypot field is filled, silently succeed
        if (data._gotcha) {
            console.log("Honeypot triggered");
            return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });
        }

        // 2. Validate input
        const result = contactSchema.safeParse(data);

        if (!result.success) {
            console.error("Validation error:", result.error.issues);
            return NextResponse.json(
                { error: "Invalid form data", details: result.error.issues },
                { status: 400 }
            );
        }

        const { firstName, lastName, email, phone, message } = result.data;

        // 3. Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // OR use generic SMTP config if preferred
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 4. Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `New Lead: ${firstName} ${lastName}`,
            text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        // 5. Success
        return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });

    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
