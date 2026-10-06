import { OrnamentDivider } from "@/components/common/IndianMotifs";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl px-2 text-center ${className}`}>
      {eyebrow ? <p className="sv-eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="sv-heading text-[clamp(1.7rem,3vw,2.35rem)]">{title}</h2>
      <OrnamentDivider className="mt-3" />
      {/* {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{subtitle}</p>
      ) : null} */}
    </div>
  );
}
