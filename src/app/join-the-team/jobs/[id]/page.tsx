"use client";

import { Lora, Noto_Sans } from "next/font/google";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Banner from "@/components/common/Banner";
import ApplyJob from "@/components/join-the-team/ApplyJob";
import WhyJoinUs from "@/components/join-the-team/WhyJoinUs";
import { useEffect, useState } from "react";
import { getVacancyById } from "@/services/vacancyService";
import { VacancyProps } from "@/interfaces/vacancy";
import { use } from "react";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const { id } = use(params);

  const [vacancyData, setVacancyData] = useState<VacancyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchVacancies = async () => {
      setLoading(true);
      setError("");
      const response = await getVacancyById(id);
      if (response.success && response.data) {
        setVacancyData(response.data);
      } else {
        setError(response.error || "Failed to load vacancy");
      }
      setLoading(false);
    };

    fetchVacancies();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className={`text-xl ${notoSans.className}`}>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !vacancyData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${lora.className}`}>
            Job Not Found
          </h1>
          <p className={`text-gray-600 mb-4 ${notoSans.className}`}>{error}</p>
          <Link
            href="/join-the-team"
            className={`text-orange-400 hover:underline ${notoSans.className}`}
          >
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
          title: vacancyData.title,
          subtitle: "Join Our Team",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />

      {/* Job Post */}
      <div
        className="lg:px-30 md:px-20 sm:px-10 px-10 py-10 pb-6 mx-auto"
        style={{ backgroundColor: "#FBFBFA" }}
      >
        <Link
          href="/join-the-team"
          className={`inline-flex items-center text-orange-400 hover:text-orange-500 mb-6 ${notoSans.className}`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Link>

        {loading && (
          <div className="p-8 min-w-125">
            <p>Loading vacancy details...</p>
          </div>
        )}

        <div className="mx-auto">
          {/* Job Title - Centered */}
          <div className="text-center mb-6">
            <h1
              className={`text-3xl md:text-4xl font-bold text-gray-900 ${lora.className}`}
            >
              {vacancyData.title}
            </h1>
          </div>

          {/* Location and Employment Type */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-700 mr-2" />
              <span className={`text-gray-700 ${notoSans.className}`}>
                {vacancyData.location}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-700 mr-2" />
              <span className={`text-gray-700 ${notoSans.className}`}>
                {vacancyData.type}
              </span>
            </div>
          </div>

          {/* Introductory Text */}
          {vacancyData.description && (
            <div
              className={`text-gray-700 text-base md:text-lg leading-relaxed lg:px-50 md:px-10 text-justify   ${notoSans.className}`}
              dangerouslySetInnerHTML={{ __html: vacancyData.description }}
            />
          )}
        </div>
      </div>

      <ApplyJob jobTitle={vacancyData.title} />
      <WhyJoinUs />
    </div>
  );
}
