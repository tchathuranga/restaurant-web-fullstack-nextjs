import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import CurrentJobs from "@/components/join-the-team/CurrentJobs"
import FutureJobs from "@/components/join-the-team/FutureJobs"
import WhyJoinUs from '@/components/join-the-team/WhyJoinUs'

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function JoinTheTeam() {
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

            <CurrentJobs />
            <FutureJobs />
            <WhyJoinUs />
        </div>
    )
}