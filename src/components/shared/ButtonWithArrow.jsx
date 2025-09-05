import React from "react";
import Path from "../../assets/svg/Path.svg";
const ButtonWithArrow = ({ title }) => {
  return (
    <a
      href="#reservation"
      className="inline-flex justify-between items-center px-4 sm:px-6 py-3 bg-[#cdab67] rounded-2xl hover:bg-[#cdab67]/90 transition text-white w-auto min-w-[200px] sm:min-w-[240px] md:min-w-[280px] mx-0 w-[300px]"
    >
      <span>{title}</span>
      <img src={Path} alt="Arrow Icon" className="h-5 w-5 sm:h-6 sm:w-6 ml-4" />
    </a>
  );
};
export default ButtonWithArrow;
