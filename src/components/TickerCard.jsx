import React from "react";
import Path from "../assets/svg/Path.svg";
const TickerCard = () => {
  return (
    <div className="relative w-full sm:w-[80%] md:w-[50%] mx-auto bg-[#2e3a13] rounded-3xl py-12 shadow-lg px-6 sm:px-8">
      <p className="text-xs uppercase mb-6 text-white">25 SR/GUEST</p>
      <h3
        className="text-[32px] sm:text-xl md:text-3xl mb-3 flex justify-between items-center gap-3"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Get your General Access Ticket
        <img
          src={Path}
          alt="Arrow Icon"
          className="hidden sm:block h-6 w-6 sm:h-8 sm:w-8"
        />
      </h3>

      <p className="text-gray-300 text-sm sm:text-base mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </p>
      <img
        src={Path}
        alt="Arrow Icon"
        className="absolute bottom-4 right-4 sm:hidden h-6 w-6"
      />
    </div>
  );
};
export default TickerCard;
