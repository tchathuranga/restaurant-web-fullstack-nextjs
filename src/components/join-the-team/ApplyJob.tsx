"use client";

import { Lora, Noto_Sans } from "next/font/google";
import { UploadCloud } from "lucide-react";
import React, { useRef, useState } from "react";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
    { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
    { id: "phone", label: "Phone Number", type: "tel", placeholder: "Your Phone Number" },
];

interface ApplyJobProps {
    jobTitle: string;
}

export default function ApplyJob({ jobTitle }: ApplyJobProps) {
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    }

    function handleBrowseClick() {
        fileInputRef.current?.click();
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setResumeFile(e.dataTransfer.files[0]);
        }
    }

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus("Sending application...");

      // Store the form element reference before async operations
      const form = e.currentTarget;

      const formData = new FormData(form);
      formData.append("jobTitle", jobTitle);

      if (resumeFile) {
        formData.append("resume", resumeFile);
      } else {
        setStatus("Please upload your resume");
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("/api/send-email-job-current", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("Application submitted successfully!");
          form.reset(); // Use the stored reference instead
          setResumeFile(null);
        } else {
          setStatus("Error: " + (data.error || "Failed to send application"));
        }
      } catch (error) {
        setStatus("Error: Failed to submit application");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
        <div className="bg-white lg:px-30 md:px-20 sm:px-10 px-6 pb-6 mx-auto">
            <h2 className={`font-bold text-gray-900 text-center py-4 ${lora.className}`} style={{ fontSize: '34px' }}>
                Apply For This Job
            </h2>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto rounded-xl px-4 sm:px-8 py-6 space-y-4">
                {fields.map((field) => (
                    <div key={field.id} className="flex flex-col">
                        <label htmlFor={field.id} className={`text-sm text-gray-500 mb-2 ${notoSans.className}`}>
                            {field.label}
                        </label>
                        <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white text-gray-900 placeholder-gray-400 ${notoSans.className}`}
                        />
                    </div>
                ))}

                <div className="flex flex-col">
                    <span className={`text-sm text-gray-500 mb-2 ${notoSans.className}`}>Resume</span>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center bg-gray-50"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <UploadCloud className="w-10 h-10 text-gray-500 mb-3" />
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx,.txt,.rtf,.odt,.jpg,.jpeg,.png,.webp,.zip"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <p className={`text-gray-600 ${notoSans.className}`}>
                            Drag and drop your resume here or{' '}
                            <button type="button" className="text-orange-500 underline" onClick={handleBrowseClick}>
                                Browse Files
                            </button>
                        </p>
                        {resumeFile && (
                            <span className="mt-2 text-green-600 text-sm">Selected: {resumeFile.name}</span>
                        )}
                    </div>
                </div>

                {status && (
                    <p className={`text-center ${status.includes('Error') ? 'text-red-600' : 'text-green-600'} ${notoSans.className}`}>
                        {status}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#F36A3A] text-white font-semibold py-3 rounded-lg hover:bg-[#e35f31] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed ${notoSans.className}`}
                >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
            </form>
        </div>
    );
}