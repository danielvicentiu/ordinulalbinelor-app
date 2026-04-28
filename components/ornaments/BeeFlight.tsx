export default function BeeFlight() {
  return (
    <>
      <style>{`
        @keyframes bee-float {
          0%, 100% { transform: translateY(0px) rotate(-5deg) translateX(0px); }
          25% { transform: translateY(-18px) rotate(4deg) translateX(8px); }
          50% { transform: translateY(-10px) rotate(-2deg) translateX(16px); }
          75% { transform: translateY(-22px) rotate(6deg) translateX(4px); }
        }
        @keyframes bee-wings {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(0.6); }
        }
        .bee-animate {
          animation: bee-float 5s ease-in-out infinite;
        }
        .bee-wings {
          animation: bee-wings 0.15s ease-in-out infinite;
        }
      `}</style>
      <div className="bee-animate inline-block" aria-hidden="true">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wings */}
          <g className="bee-wings">
            <ellipse cx="12" cy="16" rx="13" ry="7" fill="rgba(255,255,255,0.7)" />
            <ellipse cx="36" cy="16" rx="13" ry="7" fill="rgba(255,255,255,0.7)" />
          </g>
          {/* Body */}
          <ellipse cx="24" cy="28" rx="9" ry="12" fill="#2d1b0e" />
          {/* Stripes */}
          <rect x="15" y="22" width="18" height="4" rx="2" fill="#c9a227" />
          <rect x="15" y="29" width="18" height="4" rx="2" fill="#c9a227" />
          {/* Head */}
          <circle cx="24" cy="15" r="7" fill="#2d1b0e" />
          {/* Antennae */}
          <line x1="21" y1="9" x2="15" y2="3" stroke="#2d1b0e" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="27" y1="9" x2="33" y2="3" stroke="#2d1b0e" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="15" cy="3" r="2" fill="#c9a227" />
          <circle cx="33" cy="3" r="2" fill="#c9a227" />
          {/* Eyes */}
          <circle cx="21" cy="14" r="2" fill="#c9a227" />
          <circle cx="27" cy="14" r="2" fill="#c9a227" />
        </svg>
      </div>
    </>
  );
}
