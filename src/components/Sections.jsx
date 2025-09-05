import React from "react";
import MallSection from "./MallSection.jsx";
import RestaurantCards from "./ResturantCards.jsx";
import VideoSection from "./VideoSection.jsx";
import TickerCard from "./TickerCard.jsx";
import ExtraInfo from "./ExtraInfo.jsx";
import Slider from "./Slider.jsx";
import MapSection from "./MapSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";

const Sections = () => {
  return (
    <section className="bg-[#1a2c0f] text-white py-16 px-4 sm:px-6 md:px-20">
      <MallSection></MallSection>
      <VideoSection></VideoSection>
      <TickerCard></TickerCard>
      <ExtraInfo></ExtraInfo>
      <Slider></Slider>
      <RestaurantCards />
      <ExperienceSection></ExperienceSection>
      <MapSection></MapSection>
    </section>
  );
};

export default Sections;
