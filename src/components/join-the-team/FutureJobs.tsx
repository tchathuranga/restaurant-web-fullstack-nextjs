import { Lora, Noto_Sans } from "next/font/google";
import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

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

export default function FutureJobs() {
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

      if (resumeFile) {
        formData.append("resume", resumeFile);
      } else {
        setStatus("Please upload your resume");
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("/api/send-email-job-future", {
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
      <div className="mx-auto px-6 pb-8 sm:px-10 md:px-20 lg:px-30">
        <p className="sv-eyebrow pt-8 text-center">Stay in touch</p>
        <h2
          className={`sv-heading py-6 text-center ${lora.className}`}
          style={{ fontSize: "34px" }}
        >
          Future Opportunities
        </h2>
        <p
          className={`mx-auto max-w-2xl pb-6 text-center text-ink-muted ${notoSans.className}`}
          style={{ fontSize: "16px" }}
        >
          Join our talent pool for future opportunities at Sri Vihar Restaurant.
        </p>

        <form
          onSubmit={handleSubmit}
          className="sv-card mx-auto max-w-3xl space-y-4 px-4 py-6 sm:px-8"
        >
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col">
              <label
                htmlFor={field.id}
                className={`mb-2 text-sm text-ink-muted ${notoSans.className}`}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                className={`sv-input ${notoSans.className}`}
              />
            </div>
          ))}

          <div className="flex flex-col">
            <span
              className={`mb-2 text-sm text-ink-muted ${notoSans.className}`}
            >
              Resume
            </span>
            <div
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gold/50 bg-cream/50 px-4 py-8 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <UploadCloud className="mb-3 h-10 w-10 text-saffron" />
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt,.rtf,.odt,.jpg,.jpeg,.png,.webp,.zip"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <p className={`text-ink-muted ${notoSans.className}`}>
                Drag and drop your resume here or{" "}
                <button
                  type="button"
                  className="text-saffron underline"
                  onClick={handleBrowseClick}
                >
                  Browse Files
                </button>
              </p>
              {resumeFile && (
                <span className="mt-2 text-green-600 text-sm">
                  Selected: {resumeFile.name}
                </span>
              )}
            </div>
          </div>

          {status && (
            <p
              className={`text-center ${
                status.includes("Error") ? "text-red-600" : "text-green-600"
              } ${notoSans.className}`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`sv-btn w-full disabled:cursor-not-allowed disabled:opacity-60 ${notoSans.className}`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    );
}