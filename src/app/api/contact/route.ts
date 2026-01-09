import { NextResponse } from "next/server";
import { sendSMS } from "@/lib/telnyx";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Construct message for the business owner
        const smsBody = `
NEW LEAD:
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Msg: ${message}
    `.trim();

        // Send to business owner (configured or placeholder)
        // Using the number found on Google Maps as the mock "Owner" for now,
        // in reality this would be an env var.
        await sendSMS("+17204926619", smsBody);

        // Return success - in a real app might redirect to a thank you page
        // or return JSON for client-side handling.
        // Since our form uses standard HTML action, we redirect back or to a success page.
        // For MVP, simplistic redirect back to home with a query param.
        return NextResponse.redirect(new URL("/?success=true", request.url));

    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
