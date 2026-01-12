import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const jobTitle = formData.get("jobTitle") as string;
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
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // HTML email template
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2749F5;">New Job Application</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>Job Position:</strong> ${jobTitle}</p>
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
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SEND_EMAIL_TO,
            subject: `New Job Application: ${jobTitle} - ${name}`,
            html: htmlContent,
            attachments: [
                {
                    filename: resumeFile.name,
                    content: buffer,
                },
            ],
        });

        return NextResponse.json({ success: true, message: "Application sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send application" },
            { status: 500 }
        );
    }
}