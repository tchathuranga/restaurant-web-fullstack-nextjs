import { Lora, Noto_Sans } from "next/font/google";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { VacancyProps } from "@/interfaces/vacancy";


const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

interface CurrentJobsProps {
  JobData : VacancyProps[];
}

export default function CurrentJobs({ JobData }: CurrentJobsProps) {
    return (
      <div
        className="lg:px-30 md:px-20 sm:px-10 px-10 pb-6  mx-auto"
        style={{ backgroundColor: "#FBFBFA" }}
      >
        <h2
          className={`px-10 font-bold text-gray-900 text-center py-10 ${lora.className}`}
          style={{ fontSize: "34px" }}
        >
          Current Job Openings
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 justify-center items-stretch px-4 md:px-8">
          {JobData.map((job, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-lg p-6 flex flex-col flex-1 max-w-sm mx-auto md:max-w-none"
            >
              <h3
                className={`font-medium text-gray-900 mb-4 ${notoSans.className}`}
                style={{ fontSize: "24px" }}
              >
                {job.title}
              </h3>
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-gray-700 mr-2" />
                <span
                  className={`text-gray-700 ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  {job.location}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-gray-700 mr-2" />
                <span
                  className={`text-gray-700 ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  {job.type}
                </span>
              </div>

              <div
                className={`text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-5 line-clamp-3 text-justify ${notoSans.className}`}
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              <Link href={`/join-the-team/jobs/${job._id}`}>
                <button
                  className={`w-full border-2 border-orange-300 text-orange-400 font-semibold py-2 px-6 rounded-md hover:bg-orange-50 transition-colors ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}