export const Framework = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top node */}

      <rect x="2.2" y="2.2" width="1" height="1" rx="2" fill="currentColor" />

      <rect x="10.5" y="7.5" width="1" height="1" rx="2" fill="currentColor" />

      <rect x="2.5" y="10.5" width="1" height="1" rx="2" fill="currentColor" />

      {/* Connection lines forming triangle */}
      <line
        x1="2.5"
        y1="2.5"
        x2="11"
        y2="8"
        stroke="currentColor"
        strokeWidth="0.2"
      />

      <line
        x1="11"
        y1="8"
        x2="3"
        y2="11"
        stroke="currentColor"
        strokeWidth="0.2"
      />
      <line
        x1="3"
        y1="11"
        x2="2.5"
        y2="2.5"
        stroke="currentColor"
        strokeWidth="0.2"
      />
    </svg>
  );
};
