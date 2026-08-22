export function LotusIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 36c-4-8-4-16 0-24 4 8 4 16 0 24Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M32 36c-8-6-14-14-12-22 8 4 12 12 12 22Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M32 36c8-6 14-14 12-22-8 4-12 12-12 22Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M32 36c-12-4-20-12-20-20 12 2 18 10 20 20Z"
        fill="currentColor"
        opacity="0.65"
      />
      <path
        d="M32 36c12-4 20-12 20-20-12 2-18 10-20 20Z"
        fill="currentColor"
        opacity="0.65"
      />
      <circle cx="32" cy="14" r="3" fill="#F4BD50" />
    </svg>
  );
}

export function PaisleyCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 42c0-18 12-30 30-36-8 10-10 18-6 28-8-2-16 0-24 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <circle cx="28" cy="22" r="3" fill="currentColor" />
    </svg>
  );
}

export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-[#C49A3C] ${className}`}>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C49A3C] sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 border border-[#C49A3C] bg-[#F4BD50]" />
      <LotusIcon className="h-7 w-10 text-[#F67A08]" />
      <span className="h-1.5 w-1.5 rotate-45 border border-[#C49A3C] bg-[#F4BD50]" />
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C49A3C] sm:w-14" />
    </div>
  );
}

export function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.25" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const x1 = 40 + Math.cos(angle) * 12;
        const y1 = 40 + Math.sin(angle) * 12;
        const x2 = 40 + Math.cos(angle) * 34;
        const y2 = 40 + Math.sin(angle) * 34;
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
