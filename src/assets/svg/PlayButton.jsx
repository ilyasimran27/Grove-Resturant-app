import React from "react";

const PlayButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      viewBox="0 0 76 76"
    >
      {/* White Circle */}
      <circle cx="38" cy="38" r="38" fill="#fff" />

      {/* Gradient Definition */}
      <defs>
        <linearGradient
          id="play-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#283606" />
          <stop offset="1" stopColor="#0f1500" />
        </linearGradient>
      </defs>

      {/* Centered Play Arrow */}
      <polygon
        points="30,24 30,52 52,38"
        fill="url(#play-gradient)"
      />
    </svg>
  );
};

export default PlayButton;
