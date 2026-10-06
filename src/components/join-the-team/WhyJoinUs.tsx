import { DollarSign, TrendingUp, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { PaisleyCorner } from "../common/IndianMotifs";

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
        <div className="sv-band mx-auto px-6 pb-16 sm:px-10 md:px-20 lg:px-30">
            <SectionHeading
              className="py-8"
              eyebrow="A place to grow"
              title="Why Join Us"
            />

            <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-center gap-6 px-2 md:flex-row md:gap-6">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={index} className="sv-card relative mx-auto flex max-w-sm flex-1 flex-col items-center overflow-hidden p-6 text-center md:max-w-none">
                            <PaisleyCorner className="absolute right-3 top-3 h-8 w-8 rotate-90 text-gold/40" />
                            <IconComponent className="mb-4 h-12 w-12 text-saffron" strokeWidth={1.5} />
                            <h3 className="sv-heading mb-3 text-xl">
                                {feature.title}
                            </h3>
                            <p className="text-base leading-relaxed text-ink-muted">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
