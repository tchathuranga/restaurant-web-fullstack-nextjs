import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const resumeFile = formData.get("resume") as File;

        if (!resumeFile) {
            return NextResponse.json(
                { error: "Resume file is required" },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const bytes = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Log environment check
        console.log("[Email Debug] SMTP Config for Future Job Application:", {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER ? "***" : "NOT SET",
            sendTo: process.env.SEND_EMAIL_TO,
        });

        // HTML email template
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #f52738ff;">New Job Application to the Sri Vihar talent pool</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>Applicant Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <p style="margin-top: 20px; color: #666;">
                    The applicant's resume is attached to this email.
                </p>
            </div>
        `;

        // Send email
        await transporter.verify();
        console.log("[Email Debug] SMTP connection verified");

        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SEND_EMAIL_TO,
            subject: `New Job Application to the Sri Vihar talent pool - ${name}`,
            html: htmlContent,
            attachments: [
                {
                    filename: resumeFile.name,
                    content: buffer,
                },
            ],
        });

        console.log("[Email Debug] Future job application email sent successfully:", info.messageId);
        return NextResponse.json({ success: true, message: "Application sent successfully", messageId: info.messageId });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("[Email Error] Failed to send future job application:", {
            message: errorMessage,
            error: error,
        });
        return NextResponse.json(
            { error: "Failed to send application", details: errorMessage },
            { status: 500 }
        );
    }
}