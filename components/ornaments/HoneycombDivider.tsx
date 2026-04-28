interface HoneycombDividerProps {
  width?: string;
  className?: string;
}

export default function HoneycombDivider({
  width = "100%",
  className = "",
}: HoneycombDividerProps) {
  return (
    <div
      className={`flex items-center justify-center my-8 ${className}`}
      aria-hidden="true"
    >
      <svg
        width={width}
        height="32"
        viewBox="0 0 400 32"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="honeycomb" x="0" y="0" width="28" height="32" patternUnits="userSpaceOnUse">
            {/* First hexagon */}
            <polygon
              points="14,1 27,8 27,22 14,29 1,22 1,8"
              fill="none"
              stroke="#c9a227"
              strokeWidth="1"
              opacity="0.4"
            />
          </pattern>
        </defs>
        {/* Fade mask */}
        <defs>
          <linearGradient id="fadeH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="15%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMaskH">
            <rect width="400" height="32" fill="url(#fadeH)" />
          </mask>
        </defs>
        <rect width="400" height="32" fill="url(#honeycomb)" mask="url(#fadeMaskH)" />
        {/* Center ornament */}
        <polygon
          points="200,4 212,11 212,21 200,28 188,21 188,11"
          fill="#c9a227"
          opacity="0.7"
        />
        <polygon
          points="200,8 208,13 208,19 200,24 192,19 192,13"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
