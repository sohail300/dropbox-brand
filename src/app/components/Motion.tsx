import { useState } from "react";

export const Motion = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main bezier curve */}
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* The curve */}
        <path
          d={
            isHovered
              ? "M 10,90 C 40,90 60,10 90,10"
              : "M 10,90 C 30,90 70,10 90,10"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="transition-all duration-300 ease-in-out"
        />

        {/* Bottom left point */}
        <g transform="translate(10, 90)">
          <rect
            x="-5"
            y="-3"
            width="6.4"
            height="6"
            rx="2"
            fill="currentColor"
          />
        </g>

        {/* Bottom right point */}
        <g transform="translate(30, 90)">
          <rect
            x="-5"
            y="-3"
            width="6.4"
            height="6"
            rx="2"
            fill="currentColor"
          />
        </g>

        {/* Top right point */}
        <g transform="translate(90, 10)">
          <rect
            x="-2"
            y="-3"
            width="6.4"
            height="6"
            rx="2"
            fill="currentColor"
          />
        </g>

        {/* Top left point */}
        <g transform="translate(70, 10)">
          <rect
            x="-5"
            y="-3"
            width="6.4"
            height="6"
            rx="2"
            fill="currentColor"
          />
        </g>

        {/* Bottom horizontal line */}
        <line
          x1="10"
          y1="90"
          x2={"30"}
          y2="90"
          stroke="currentColor"
          strokeWidth="0.6"
          className="transition-all duration-300 ease-in-out"
        />

        {/* Top horizontal line */}
        <line
          x1="70"
          y1="10"
          x2="90"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
    </div>
  );
};

// The full component with the container
export const MotionContainer = () => {
  return (
    <div className="border row-span-2 bg-[#c8aff0] z-10 flex justify-around items-start flex-col p-6 text-[#682760] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-150 rounded-br-2xl">
      <h1 className="text-4xl">Motion</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Motion />
      </div>
    </div>
  );
};

export default MotionContainer;
