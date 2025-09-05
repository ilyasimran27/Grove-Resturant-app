import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import sliderPicture1 from "../assets/slider-pictures/slider-pic-1.png";
import sliderPicture2 from "../assets/slider-pictures/slider-pic-2.png";
import sliderPicture3 from "../assets/slider-pictures/slider-pic-3.png";
import sliderPicture4 from "../assets/slider-pictures/slider-pic-4.png";
const Slider = () => {
  const slides = [
    { img: sliderPicture1, title: "Little Krazy" },
    { img: sliderPicture2, title: "Hawanim Groves City" },
    { img: sliderPicture3, title: "Picnic Market" },
    { img: sliderPicture4, title: "Luxury Dining" },
  ];
  return (
    <div className="max-w-[100%] md:ml-[300px] md:w-[60%] w-full text-left md:pl-6 md:pl-0 overflow-hidden md:mt-20 mt-8">
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex flex-col items-center justify-center md:h-[600px] h-[400px]">
              <img
                src={slide.img}
                alt={slide.title}
                className={`rounded-3xl shadow-lg mb-2 object-cover ${
                  index % 2 === 0
                    ? "md:h-[500px] md:w-[350px] h-[280px] w-[200px]"
                    : "md:h-72 md:w-[220px] h-[280px] w-[200px]"
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
  );
};
export default Slider;
