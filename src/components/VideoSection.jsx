import React from "react";
import videoThumbnail from "../assets/video-thumbnail.png";
import playIcon from "../assets/svg/playIcon.svg";
const VideoSection = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative w-full max-w-3xl">
        <img
          src={videoThumbnail}
          alt="Mall promo video"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center shadow-md">
            <img
              src={playIcon}
              alt="playIcon"
              className="h-6 w-6 sm:h-8 sm:w-8 ml-1"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
export default VideoSection;
