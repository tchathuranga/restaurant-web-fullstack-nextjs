"use client";

import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import CurrentJobs from "@/components/join-the-team/CurrentJobs";
import FutureJobs from "@/components/join-the-team/FutureJobs";
import WhyJoinUs from "@/components/join-the-team/WhyJoinUs";
import SlideUpSection from "@/components/common/SlideUpSection";
import { useEffect, useState } from "react";
import { VacancyProps } from "@/interfaces/vacancy";
import { getAllVacancies } from "@/services/vacancyService";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function JoinTheTeam() {
  const [vacancyData, setVacancyData] = useState<VacancyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchVacancies = async () => {
      setLoading(true);
      setError("");
      const response = await getAllVacancies();
      if (response.success && response.data) {
        setVacancyData(response.data);
      } else {
        setError(response.error || "Failed to load vacancies");
      }
      setLoading(false);
    };

    fetchVacancies();
  }, []);

  return (
    <div>
      <Banner
        singleImage="/images/joinTheTeamBanner.png"
        content={{
          title: "Join Our Team",
          subtitle: "Be part of our culinary journey",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />

      {loading && (
        <div className="p-8 min-w-125">
          <p>Loading vacancy details...</p>
        </div>
      )}

      {vacancyData.length > 0 && (
        <SlideUpSection>
          <CurrentJobs JobData={vacancyData} />
        </SlideUpSection>
      )}

      <SlideUpSection>
        <FutureJobs />
      </SlideUpSection>

      <SlideUpSection>
        <WhyJoinUs />
      </SlideUpSection>
    </div>
  );
}
