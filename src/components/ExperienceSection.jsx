import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import sliderPicture1 from "../assets/slider-pictures/slider-pic-1.png";
import secondSliderPic1 from "../assets/slider-pictures/second-slider-pic1.png";
import secondSliderPic2 from "../assets/slider-pictures/second-slider-pic2.png";
import secondSliderPic3 from "../assets/slider-pictures/second-slider-pic3.png";
import ButtonWithArrow from "./shared/ButtonWithArrow.jsx";
const ExperienceSection = () => {
  const secondSlides = [
    { img: secondSliderPic1, title: "Resturant" },
    { img: secondSliderPic2, title: "Experiences" },
    { img: secondSliderPic3, title: "Events" },
    { img: sliderPicture1, title: "Little Krazy" },
  ];
  return (
    <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto mt:8 md:mt-12 gap-8 md:gap-0">
      <div className="w-[80%] sm:w-[90%] md:w-[30%] mt-14 md:mt-24 text-left md:text-left">
        <h1
          className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Curate your
        </h1>
        <h1
          className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          experience
        </h1>
        <h1
          className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl mb-10 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          as you like
        </h1>
        <div className="flex justify-start md:justify-start">
          <ButtonWithArrow title="Book tickets" />
        </div>
      </div>

      <div className="max-w-[100%] md:ml-[20px] md:w-[60%] w-full text-left md:pl-6 md:pl-0 overflow-hidden mt-[-10px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: "auto" },
          }}
        >
          {secondSlides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex flex-col items-center justify-center md:h-[600px] h-[400px]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className={`rounded-3xl shadow-lg mb-2 object-cover ${
                    index % 2 === 0
                      ? "md:h-72 md:w-[220px] h-[280px] w-[200px]"
                      : "md:h-[500px] md:w-[350px] h-[280px] w-[200px]"
                  }`}
                />
                <p
                  className="text-[22px] sm:text-lg md:text-3xl text-center mt-2 md:w-[200px] w-[140px] h-[60px]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {slide.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExperienceSection;
