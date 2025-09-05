import React from "react";
import ButtonWithArrow from "./shared/ButtonWithArrow.jsx";
import map from "../assets/map.png";
const MapSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl md:mx-auto gap-8 md:gap-0 md:mt-0">
      <div className="w-full sm:w-[90%] md:w-[60%] text-left md:mt-0 mt-[-88px]">
        <img src={map} alt="map" className="w-full h-auto object-contain" />
      </div>

      <div className="relative w-full sm:w-[80%] md:w-[50%] md:mx-auto rounded-3xl py-12 sm:px-8">
        <p className="text-xs uppercase mb-6 text-white">
          EXPERIENCE THE GROVES
        </p>

        <h3
          className="text-[32px] sm:text-xl md:text-3xl mb-3 flex justify-between items-center gap-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          FIND YOUR PLACE
        </h3>

        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Our interactive map will show you the way to the shops and restaurants
          that you want to see
        </p>

        <div className="flex justify-start md:justify-start">
          <ButtonWithArrow title="OPEN THE MAP" />
        </div>
      </div>
    </div>
  );
};
export default MapSection;
