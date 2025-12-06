import { Lora, Noto_Sans } from "next/font/google";
import { UploadCloud } from "lucide-react";

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
    return(
        <div className="bg-white lg:px-30 md:px-20 sm:px-10 px-6 pb-6 mx-auto">
            <h2 className={`font-bold text-gray-900 text-center py-10 ${lora.className}`} style={{ fontSize: '34px' }}>
                Future Opportunities
            </h2>
            <p className={`text-center text-gray-600 max-w-2xl mx-auto pb-6 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                Don&apos;t see the right position? Join our talent pool for future opportunities at Sri Vihar Restaurant.
            </p>

            <form className="max-w-3xl mx-auto rounded-xl px-4 sm:px-8 py-6 space-y-4">
                {fields.map((field) => (
                    <div key={field.id} className="flex flex-col">
                        <label htmlFor={field.id} className={`text-sm text-gray-500 mb-2 ${notoSans.className}`}>
                            {field.label}
                        </label>
                        <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white text-gray-900 placeholder-gray-400 ${notoSans.className}`}
                        />
                    </div>
                ))}

                <div className="flex flex-col">
                    <label htmlFor="cover-letter" className={`text-sm text-gray-500 mb-2 ${notoSans.className}`}>
                        Cover Letter (Optional)
                    </label>
                    <textarea
                        id="cover-letter"
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-900 placeholder-gray-400 resize-none ${notoSans.className}`}
                    />
                </div>

                <div className="flex flex-col">
                    <span className={`text-sm text-gray-500 mb-2 ${notoSans.className}`}>Resume</span>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center bg-gray-50">
                        <UploadCloud className="w-10 h-10 text-gray-500 mb-3" />
                        <p className={`text-gray-600 ${notoSans.className}`}>
                            Drag and drop your resume here or{" "}
                            <button type="button" className="text-orange-500 underline">
                                Browse Files
                            </button>
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    className={`w-full bg-[#F36A3A] text-white font-semibold py-3 rounded-lg hover:bg-[#e35f31] transition-colors ${notoSans.className}`}
                >
                    Submit Application
                </button>
            </form>
        </div>
    )
}