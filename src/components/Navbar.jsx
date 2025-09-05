import React, { useState } from "react";
import sliderImage from "../assets/slider-image.png";
import logo from "../assets/logo.png";

import tiktokIcon from "../assets/tiktok-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import snapChatIcon from "../assets/snapchat-icon.png";
import downArrowIcon from "../assets/down-arrow-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import flag from "../assets/flag.png";
import crossIcon from "../assets/cross-icon.png";
import burgerIcon from "../assets/burger-icon.png";
import ButtonWithArrow from "./shared/ButtonWithArrow";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${sliderImage})` }}
    >
      <div className="absolute inset-y-0 left-0 lg:w-1/2 md:w-1/2 bg-black bg-opacity-50 w-full"></div>
      <nav className="relative flex justify-between items-center px-8 py-6 text-white z-20">
        <div className="flex items-center space-x-2 ml-0 md:ml-20">
          <img src={logo} alt="Restaurant Logo" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex space-x-6 mr-20 items-center">
          <div className="flex space-x-4">
            <img src={tiktokIcon} alt="tiktok icon" className="h-5 w-5" />
            <img src={instagramIcon} alt="instagram icon" className="h-5 w-5" />
            <img src={twitterIcon} alt="twitter icon" className="h-5 w-5" />
            <img src={snapChatIcon} alt="snapchat icon" className="h-5 w-5" />
          </div>

          <a
            href="#reservation"
            className="inline-flex justify-center items-center px-4 py-2 bg-[#cdab67] rounded-xl hover:bg-[#cdab67]/90 transition text-white w-auto min-w-[130px]"
          >
            <span>Login</span>
          </a>

          <div
            className="flex space-x-2 items-center"
            style={{ marginRight: 30 }}
          >
            <img
              src={downArrowIcon}
              alt="down arrow Icon"
              className="h-2 w-3"
            />
            <img src={flag} alt="flag" className="h-6 w-10" />
            <p className="text-[14px]">English</p>
          </div>
        </div>

        <div className="md:hidden mr-0">
          <button onClick={() => setMenuOpen(true)}>
            <img src={burgerIcon} alt="burger menu" className="h-8 w-8" />
          </button>
        </div>
      </nav>

      <div className="hidden md:block relative border-t border-b border-gray-400 bg-black bg-opacity-30 z-10">
        <ul className="flex justify-evenly space-x-12 py-3 text-white uppercase text-sm tracking-wider">
          <li>
            <a href="#dine" className="hover:text-yellow-400 font-inter">
              Dine With Us
            </a>
          </li>
          <li>
            <a href="#visit" className="hover:text-yellow-400 font-inter">
              Plan Your Visit
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-yellow-400 font-inter">
              Events
            </a>
          </li>
          <li>
            <a href="#map" className="hover:text-yellow-400 font-inter">
              View Groves Map
            </a>
          </li>
          <li>
            <a href="#story" className="hover:text-yellow-400 font-inter">
              Our Story
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 font-inter">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-l from-[#0a0a0a] to-green-800 text-white z-50 flex flex-col">
          <div className="flex justify-between items-center px-6 py-6">
            <img src={logo} alt="logo" className="h-12" />
            <button onClick={() => setMenuOpen(false)}>
              <img src={crossIcon} alt="close menu" className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col space-y-6 mt-8 text-[13px] uppercase tracking-wide">
            <a
              href="#dine"
              className="border-t border-gray-400 px-6 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              Dine With Us
            </a>
            <a
              href="#visit"
              className="border-t border-gray-400 px-6 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              Plan Your Visit
            </a>
            <a
              href="#events"
              className="border-t border-gray-400 px-6 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#map"
              className="border-t border-gray-400 px-6 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              View Groves Map
            </a>
            <a
              href="#story"
              className="border-t border-gray-400 px-6 pt-4"
              onClick={() => setMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#contact"
              className="border-t border-b border-gray-400 px-6 py-4"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>

            <div className="pt-6 space-y-4 border-gray-700 px-6">
              <div className="flex items-center space-x-2">
                <img src={downArrowIcon} alt="down arrow" className="h-2 w-3" />
                <img src={flag} alt="flag" className="h-6 w-10" />
                <p>English</p>
              </div>

              <a
                href="#login"
                className="inline-flex items-center justify-center px-4 py-4 bg-[#cdab67] rounded-2xl hover:bg-[#cdab67]/90 transition w-[130px]"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center h-[70vh] text-white px-4 sm:px-6 md:px-8 ml-0 md:ml-24">
        <div className="w-full md:w-[50%] text-left pl-6 md:pl-0">
          <p className="mb-4 text-xs sm:text-sm">KHAWAJA YANNI</p>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-2 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            The new
          </h1>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            era of luxury
          </h1>

          <p className="text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
          <p className="text-sm sm:text-base mb-8">
            typesetting industry. Lorem Ipsum
          </p>

          <ButtonWithArrow title="Book reservation now" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
