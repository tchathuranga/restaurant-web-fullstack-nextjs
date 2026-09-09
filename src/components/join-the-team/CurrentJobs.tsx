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
        className="sv-band mx-auto px-6 pb-8 sm:px-10 md:px-20 lg:px-30"
      >
        <p className="sv-eyebrow pt-8 text-center">Work with us</p>
        <h2
          className={`sv-heading px-6 py-6 text-center ${lora.className}`}
          style={{ fontSize: "34px" }}
        >
          Current Job Openings
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 justify-center items-stretch px-4 md:px-8">
          {JobData.map((job, index) => (
            <div
              key={index}
              className="sv-card mx-auto flex max-w-sm flex-1 flex-col p-6 md:max-w-none"
            >
              <h3
                className={`sv-heading mb-4 ${notoSans.className}`}
                style={{ fontSize: "24px" }}
              >
                {job.title}
              </h3>
              <div className="flex items-center mb-3">
                <MapPin className="mr-2 h-5 w-5 text-saffron" />
                <span
                  className={`text-ink ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  {job.location}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="mr-2 h-5 w-5 text-saffron" />
                <span
                  className={`text-ink ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  {job.type}
                </span>
              </div>

              <div
                className={`mb-4 line-clamp-3 text-justify text-sm leading-relaxed text-ink-muted md:mb-5 md:text-base ${notoSans.className}`}
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              <Link href={`/join-the-team/jobs/${job._id}`}>
                <button
                  className={`sv-btn-outline w-full ${notoSans.className}`}
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