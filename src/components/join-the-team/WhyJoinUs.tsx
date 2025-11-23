import { Lora, Noto_Sans } from "next/font/google";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const features = [
    {
        icon: DollarSign,
        title: "Competitive Pay",
        description: "Excellent compensation package with performance bonuses"
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Opportunities for advancement and skill development"
    },
    {
        icon: Users,
        title: "Team Culture",
        description: "Supportive and collaborative work environment"
    }
];

export default function WhyJoinUs(){
    return(
        <div className="lg:px-30 md:px-20 sm:px-10 px-6 pb-16 mx-auto" style={{backgroundColor: "#FBFBFA"}}>
            <div className="text-center py-6">
                <h2 className={`font-bold text-gray-900 pb-2 ${lora.className}`} style={{ fontSize: '34px' }}>
                    Why Join Us
                </h2>
               
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 justify-center items-stretch px-4 md:px-8 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={index} className="rounded-lg border border-gray-300 p-6 flex flex-col items-center text-center flex-1 max-w-sm mx-auto md:max-w-none">
                            <IconComponent className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
                            <h3 className={`font-bold text-gray-900 mb-3 ${notoSans.className}`} style={{ fontSize: '20px' }}>
                                {feature.title}
                            </h3>
                            <p className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px', lineHeight: '1.5' }}>
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}