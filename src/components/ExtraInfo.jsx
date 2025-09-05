import React from "react";
import ButtonWithArrow from "./shared/ButtonWithArrow";
const ExtraInfo = () => {
  return (
    <div className="w-[80%] sm:w-[90%] md:w-[60%] md:mx-auto mt-14 text-left md:text-left">
      <h1
        className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 leading-tight"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Book general access ticket and
      </h1>
      <h1
        className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl mb-10 leading-tight"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        enjoy the attractions for free
      </h1>
      <div className="flex justify-start md:justify-start">
        <ButtonWithArrow title="Book general access ticket" />
      </div>
    </div>
  );
};
export default ExtraInfo;
