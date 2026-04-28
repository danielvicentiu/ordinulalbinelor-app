import Image from "next/image";

interface StarosteBadgeProps {
  photoUrl?: string;
  size?: number;
}

export default function StarosteBadge({
  photoUrl,
  size = 200,
}: StarosteBadgeProps) {
  const r = size / 2;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="Starostele Daniel — Păstrătorul Cetății"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e6c14a" />
            <stop offset="100%" stopColor="#9a7a14" />
          </linearGradient>
          <path
            id="textCircle"
            d={`M ${r},${r} m -${r - 10},0 a ${r - 10},${r - 10} 0 1,1 ${2 * (r - 10)},0 a ${r - 10},${r - 10} 0 1,1 -${2 * (r - 10)},0`}
          />
          <clipPath id="badgeClip">
            <circle cx={r} cy={r} r={r - 4} />
          </clipPath>
        </defs>

        {/* Outer ring */}
        <circle cx={r} cy={r} r={r - 2} fill="none" stroke="url(#badgeGrad)" strokeWidth="3" />
        <circle cx={r} cy={r} r={r - 8} fill="none" stroke="rgba(201,162,39,0.4)" strokeWidth="1" />

        {/* Background */}
        <circle cx={r} cy={r} r={r - 9} fill="#faf6ea" clipPath="url(#badgeClip)" />

        {/* Circular text */}
        <text fontSize="11" fontFamily="Cardo, serif" fill="#9a7a14" letterSpacing="3">
          <textPath href="#textCircle" startOffset="0%">
            STAROSTELE DANIEL • PĂSTRĂTORUL CETĂȚII •
          </textPath>
        </text>

        {/* Center hexagon */}
        <polygon
          points={`${r},${r - 35} ${r + 30},${r - 17} ${r + 30},${r + 17} ${r},${r + 35} ${r - 30},${r + 17} ${r - 30},${r - 17}`}
          fill="url(#badgeGrad)"
          opacity="0.9"
        />
        <polygon
          points={`${r},${r - 28} ${r + 24},${r - 14} ${r + 24},${r + 14} ${r},${r + 28} ${r - 24},${r + 14} ${r - 24},${r - 14}`}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />

        {photoUrl ? null : (
          <g>
            {/* Silhouette: apicultor bust */}
            {/* Body */}
            <rect x={r - 18} y={r + 8} width="36" height="24" rx="4" fill="#2d1b0e" opacity="0.85" />
            {/* Head */}
            <circle cx={r} cy={r} r="12" fill="#2d1b0e" opacity="0.85" />
            {/* Beekeeper hat */}
            <rect x={r - 16} y={r - 22} width="32" height="10" rx="3" fill="#5a4220" opacity="0.9" />
            <rect x={r - 20} y={r - 26} width="40" height="5" rx="2" fill="#5a4220" opacity="0.9" />
            {/* Veil lines */}
            <line x1={r - 16} y1={r - 12} x2={r - 16} y2={r + 6} stroke="#9a7a14" strokeWidth="0.8" opacity="0.6" />
            <line x1={r + 16} y1={r - 12} x2={r + 16} y2={r + 6} stroke="#9a7a14" strokeWidth="0.8" opacity="0.6" />
          </g>
        )}
      </svg>

      {photoUrl && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: size * 0.22 }}
        >
          <div className="w-full h-full relative rounded-full overflow-hidden">
            <Image
              src={photoUrl}
              alt="Starostele Daniel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
