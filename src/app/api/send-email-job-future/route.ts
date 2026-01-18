import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
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

        // Log request
        console.log("[Email Debug] Sending future job application from:", email);

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

        // Send email with attachment
        const result = await resend.emails.send({
            from: process.env.RESEND_FROM || "noreply@srivihar.com",
            to: process.env.SEND_EMAIL_TO || "thisarachathuranga000@gmail.com",
            subject: `New Job Application to the Sri Vihar talent pool - ${name}`,
            html: htmlContent,
            attachments: [
                {
                    filename: resumeFile.name,
                    content: buffer,
                },
            ],
        });

        if (result.error) {
            console.error("[Email Error] Resend API error:", result.error);
            return NextResponse.json(
                { error: "Failed to send application", details: result.error.message },
                { status: 500 }
            );
        }

        console.log("[Email Debug] Future job application email sent successfully:", result.data?.id);
        return NextResponse.json({ success: true, message: "Application sent successfully", messageId: result.data?.id });
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
