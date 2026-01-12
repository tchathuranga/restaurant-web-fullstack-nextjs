import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

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

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SEND_EMAIL_TO,
            subject: `Customer message: - ${name}`,
            html: htmlContent
        });

        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send application" },
            { status: 500 }
        );
    }
}