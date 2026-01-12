import { Lora, Noto_Sans } from "next/font/google";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Banner from "@/components/common/Banner";
import ApplyJob from "@/components/join-the-team/ApplyJob"
import WhyJoinUs from "@/components/join-the-team/WhyJoinUs";
import { jobData } from "@/const/jobData";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

async function getJobData(id: string) {
    return jobData.find(job => job.id === parseInt(id)) || null;
}

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function JobDetailPage({ params }: PageProps) {
    const { id } = await params;
    const job = await getJobData(id);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className={`text-2xl font-bold mb-4 ${lora.className}`}>Job Not Found</h1>
                    <Link href="/join-the-team" className={`text-orange-400 hover:underline ${notoSans.className}`}>
                        Back to Jobs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Banner
                singleImage="/images/joinTheTeamBanner.png"
                content={{
                    title: job.title,
                    subtitle: "Join Our Team",
                    titleFont: lora,
                    subtitleFont: notoSans,
                    titleFontSize: "font-medium",
                }}
            />

            {/* Job Post */}
            <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-10 pb-6 mx-auto" style={{backgroundColor: "#FBFBFA"}}>
                <Link 
                    href="/join-the-team" 
                    className={`inline-flex items-center text-orange-400 hover:text-orange-500 mb-6 ${notoSans.className}`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Jobs
                </Link>

                <div className="mx-auto">
                    {/* Job Title - Centered */}
                    <div className="text-center mb-6">
                        <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 ${lora.className}`}>
                            {job.title}
                        </h1>
                    </div>

                    {/* Location and Employment Type */}
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-gray-700 mr-2" />
                            <span className={`text-gray-700 ${notoSans.className}`}>
                                {job.location}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-700 mr-2" />
                            <span className={`text-gray-700 ${notoSans.className}`}>
                                {job.employmentType}
                            </span>
                        </div>
                    </div>

                    {/* Introductory Text */}
                    {job.description && (
                        <div className="mb-8">
                            <p className={`text-gray-700 leading-relaxed ${notoSans.className} text-base`}>
                                {job.description}
                            </p>
                        </div>
                    )}

                    {/* Requirements Section */}
                    {job.requirements && job.requirements.length > 0 && (
                        <div className="mb-8">
                            <h2 className={`text-xl font-bold text-gray-900 mb-4 ${notoSans.className}`}>
                                Requirements
                            </h2>
                            <ul className={`space-y-3 ${notoSans.className}`}>
                                {job.requirements.map((item, index) => (
                                    <li key={index} className="text-gray-700 flex items-start text-base leading-relaxed">
                                        <span className="mr-3 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Qualifications Section */}
                    {job.qualifications && job.qualifications.length > 0 && (
                        <div className="mb-8">
                            <h2 className={`text-xl font-bold text-gray-900 mb-4 ${notoSans.className}`}>
                                Qualifications:
                            </h2>
                            <ul className={`space-y-3 ${notoSans.className}`}>
                                {job.qualifications.map((item, index) => (
                                    <li key={index} className="text-gray-700 flex items-start text-base leading-relaxed">
                                        <span className="mr-3 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <ApplyJob jobTitle={job.title} />
            <WhyJoinUs />
        </div>
    );
}

