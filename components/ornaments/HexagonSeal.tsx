interface HexagonSealProps {
  size?: number;
  glow?: boolean;
  withBee?: boolean;
  className?: string;
}

export default function HexagonSeal({
  size = 60,
  glow = false,
  withBee = true,
  className = "",
}: HexagonSealProps) {
  const id = `hexGrad-${size}-${glow ? "g" : "n"}`;
  const filterId = `hexGlow-${size}`;

  return (
    <svg
      width={size}
      height={Math.round(size * 1.155)}
      viewBox="0 0 100 115.47"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e6c14a" />
          <stop offset="60%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#9a7a14" />
        </linearGradient>
        {glow && (
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      {/* Pointy-top hexagon */}
      <polygon
        points="50,2 97,28.74 97,82.24 50,109 3,82.24 3,28.74"
        fill={`url(#${id})`}
        stroke="#9a7a14"
        strokeWidth="1.5"
        filter={glow ? `url(#${filterId})` : undefined}
      />
      {/* Inner hexagon ring */}
      <polygon
        points="50,9 90,31.5 90,76.5 50,99 10,76.5 10,31.5"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      {withBee && (
        <g transform="translate(50,60)">
          {/* Wings */}
          <ellipse cx="-14" cy="-14" rx="14" ry="8" fill="white" opacity="0.65" transform="rotate(-20,-14,-14)" />
          <ellipse cx="14" cy="-14" rx="14" ry="8" fill="white" opacity="0.65" transform="rotate(20,14,-14)" />
          {/* Body */}
          <ellipse cx="0" cy="0" rx="9" ry="12" fill="#2d1b0e" />
          {/* Stripes */}
          <rect x="-9" y="-5" width="18" height="4" rx="1.5" fill="#c9a227" />
          <rect x="-9" y="2" width="18" height="4" rx="1.5" fill="#c9a227" />
          {/* Head */}
          <circle cx="0" cy="-17" r="7" fill="#2d1b0e" />
          {/* Antennae */}
          <line x1="-3" y1="-23" x2="-8" y2="-30" stroke="#2d1b0e" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="-23" x2="8" y2="-30" stroke="#2d1b0e" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="-8" cy="-30" r="1.5" fill="#2d1b0e" />
          <circle cx="8" cy="-30" r="1.5" fill="#2d1b0e" />
        </g>
      )}
    </svg>
  );
}
