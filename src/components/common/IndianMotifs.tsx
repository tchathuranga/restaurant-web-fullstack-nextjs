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
      <circle cx="32" cy="14" r="3" fill="#E8C36A" />
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
    <div className={`flex items-center justify-center gap-2 text-gold ${className}`}>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold bg-gold-soft" />
      <LotusIcon className="h-7 w-10 text-saffron" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold bg-gold-soft" />
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold sm:w-14" />
    </div>
  );
}

const MANDALA_RAYS = [
  { x1: 52, y1: 40, x2: 74, y2: 40 },
  { x1: 50.39, y1: 46, x2: 69.45, y2: 57 },
  { x1: 46, y1: 50.39, x2: 57, y2: 69.45 },
  { x1: 40, y1: 52, x2: 40, y2: 74 },
  { x1: 34, y1: 50.39, x2: 23, y2: 69.45 },
  { x1: 29.61, y1: 46, x2: 10.55, y2: 57 },
  { x1: 28, y1: 40, x2: 6, y2: 40 },
  { x1: 29.61, y1: 34, x2: 10.55, y2: 23 },
  { x1: 34, y1: 29.61, x2: 23, y2: 10.55 },
  { x1: 40, y1: 28, x2: 40, y2: 6 },
  { x1: 46, y1: 29.61, x2: 57, y2: 10.55 },
  { x1: 50.39, y1: 34, x2: 69.45, y2: 23 },
] as const;

export function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.25" />
      {MANDALA_RAYS.map((ray, index) => (
        <line
          key={index}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
