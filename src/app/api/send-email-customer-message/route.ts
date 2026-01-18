import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Log request
        console.log("[Email Debug] Sending customer message from:", email);

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2749F5;">New Customer Message</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Customer Name:</strong> ${name}</p>
                    <p><strong>Customer Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
            </div>
        `;

        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.SEND_EMAIL_TO || "thisarachathuranga000@gmail.com",
            subject: `Customer message: - ${name}`,
            html: htmlContent
        });

        if (result.error) {
            console.error("[Email Error] Resend API error:", result.error);
            return NextResponse.json(
                { error: "Failed to send message", details: result.error.message },
                { status: 500 }
            );
        }

        console.log("[Email Debug] Email sent successfully:", result.data?.id);
        return NextResponse.json({ success: true, message: "Message sent successfully", messageId: result.data?.id });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("[Email Error] Failed to send customer message:", {
            message: errorMessage,
            error: error,
        });
        return NextResponse.json(
            { error: "Failed to send message", details: errorMessage },
            { status: 500 }
        );
    }
}
