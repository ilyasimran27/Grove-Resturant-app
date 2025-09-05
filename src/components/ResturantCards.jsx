import React from "react";
import vidaVera from "../assets/vida-vera.png";
import zamaZulu from "../assets/zama-zulu.png";
import khawajaYamini from "../assets/khawaja-yamini.png";
import yamagala from "../assets/yamagala.png";
import Path from "../assets/svg/Path.svg";

const restaurants = [
  { img: vidaVera, title: "Vida Vera", price: "100 SR PER GUEST" },
  { img: zamaZulu, title: "Zama Zulu", price: "100 SR PER GUEST" },
  { img: khawajaYamini, title: "Khawaja Yanni", price: "100 SR PER GUEST" },
  { img: yamagala, title: "Yamagata", price: "100 SR PER GUEST" },
];

const RestaurantCards = () => {
  return (
    <>
      <div className="text-center md:max-w-3xl mx-auto mb-12 max-w-xl md:mt-44 mt:12">
        <h2
          className="text-4xl sm:text-3xl md:text-5xl mb-4 md:text-center text-left w-[65%] md:w-full"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Experience the finest cuisine
        </h2>
        <p className="md:block text-gray-200 md:text-sm sm:text-base hidden ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className=" rounded-b-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={restaurant.img}
              alt={restaurant.title}
              className="w-full rounded-t-2xl"
            />

            <div className="p-5 flex flex-col justify-between flex-1">
              <h3
                className="text-lg md:text-xl text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {restaurant.title}
              </h3>

              <div className="flex items-center justify-between">
                <span className="bg-[#cdab67] text-[10px] md:text-xs uppercase px-3 py-1 rounded-full tracking-wide text-white">
                  {restaurant.price}
                </span>
                <img src={Path} alt="Arrow" className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantCards;
