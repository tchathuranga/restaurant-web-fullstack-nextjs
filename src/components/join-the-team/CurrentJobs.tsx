import { Lora, Noto_Sans } from "next/font/google";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jobData = [
    {
        id:1,
        title: "South Indian Cook",
        location: "Colombo 5, Sri Lanka",
        employmentType: "Full-Time",
        requirements: [
            "Experience Level: 2-5 Years",
            "Availability: Immediate",
            "Skills: Cooking, South Indian, Vegetarian",
            "Team Player",
            "Menu Development"
        ]
    },
    {
        id:2,
        title: "South Indian Cook",
        location: "Colombo 5, Sri Lanka",
        employmentType: "Full-Time",
        requirements: [
            "Experience Level: 2-5 Years",
            "Availability: Immediate",
            "Skills: Cooking, South Indian, Vegetarian",
            "Team Player",
            "Menu Development"
        ]
    },
    {
        id:3,
        title: "South Indian Cook",
        location: "Colombo 5, Sri Lanka",
        employmentType: "Full-Time",
        requirements: [
            "Experience Level: 2-5 Years",
            "Availability: Immediate",
            "Skills: Cooking, South Indian, Vegetarian",
            "Team Player",
            "Menu Development"
        ]
    }
]

 

export default function CurrentJobs() {
    return(
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 pb-6 mx-auto" style={{backgroundColor: "#FBFBFA"}}>
            <h2 className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`} style={{ fontSize: '34px' }}>
                Current Job Openings
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 justify-center items-stretch px-4 md:px-8">
                {jobData.map((job, index) => (
                    <div key={index} className="bg-green-100 rounded-lg p-6 flex flex-col flex-1 max-w-sm mx-auto md:max-w-none">
                        <h3 className={`font-medium text-gray-900 mb-4 ${notoSans.className}`} style={{ fontSize: '24px' }}>
                            {job.title}
                        </h3>
                        <div className="flex items-center mb-3">
                            <MapPin className="w-5 h-5 text-gray-700 mr-2" />
                            <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                {job.location}
                            </span>
                        </div>
                        <div className="flex items-center mb-4">
                            <Clock className="w-5 h-5 text-gray-700 mr-2" />
                            <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                {job.employmentType}
                            </span>
                        </div>
                        <ul className={`flex-1 mb-6 space-y-2 ${notoSans.className}`}>
                            {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="text-gray-700" style={{ fontSize: '14px' }}>
                                    • {req}
                                </li>
                            ))}
                        </ul>
                        <Link href={`/join-the-team/jobs/${job.id}`}>
                            <button className={`w-full border-2 border-orange-300 text-orange-400 font-semibold py-2 px-6 rounded-md hover:bg-orange-50 transition-colors ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}