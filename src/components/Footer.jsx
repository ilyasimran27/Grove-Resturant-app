import React from "react";

import tiktokIcon from "../assets/tiktok-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import snapChatIcon from "../assets/snapchat-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/master-card.png";
import americanExpress from "../assets/american-express.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a2c0f] text-white py-16 px-4 sm:px-6 md:px-20 border-t border-gray-400">
      <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto gap-12 md:gap-24 mb-16 justify-between">
        <div className="w-auto sm:w-[90%] text-left">
          <h1
            className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 leading-tight"
            style={{ fontFamily: "Libertinus Serif Display, system-ui" }}
          >
            Join us for an
          </h1>
          <h1
            className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight"
            style={{ fontFamily: "Libertinus Serif Display, system-ui" }}
          >
            unforgettable experience
          </h1>
        </div>

        <div className="w-auto sm:w-[80%] flex flex-col md:items-end md:ml-10 items-start">
          <div className="flex flex-col items-start">
            <p className="text-xs uppercase mb-2 text-white">
              DOWNLOAD THE GROVE APP
            </p>
            <div className="flex gap-6 items-end">
              <img src={appStore} className="h-16 w-[170px] object-contain" />
              <img src={googlePlay} className="h-16 w-[170px] object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-200 mb-10">
        {/* Location */}
        <div>
          <h3 className="uppercase text-xs mb-3 tracking-wide">Location</h3>
          <p>Al-Hizam Park</p>
          <p>Al-Semairi, Yanbu Al Bahr 46455</p>
          <p>Riyadh Saudi Arabia</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="uppercase text-xs mb-3 tracking-wide">
            Working Hours
          </h3>
          <p>Sun until Thurs: 4:00PM</p>
          <p>Fri & Sat: 2:30PM</p>
          <br />
          <p>Gates Close at:</p>
          <p>Sat until Wed: 12:00AM</p>
          <p>Thu & Fri: 12:30AM</p>
        </div>

        {/* Guest Service Call */}
        <div>
          <h3 className="uppercase text-xs mb-3 tracking-wide">
            Guest Service Call
          </h3>
          <p>cc@thegroves-sa.com</p>
          <p>920001672</p>
          <br />
          <p>+966556631309</p>
        </div>
      </div>

      <div className="pt-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="hidden md:flex flex-col items-start gap-3 ">
            <img src={logo} alt="The Groves" className="h-10 object-contain" />

            <div className="flex gap-6 text-white text-sm mt-4 whitespace-nowrap">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <p className="whitespace-nowrap">
                ©2023 The Groves for Entertainment
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-8 w-full">
            <div className="flex gap-5">
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="h-7 w-7 object-contain"
              />
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />
              <img
                src={twitterIcon}
                alt="Twitter"
                className="h-7 w-7 object-contain"
              />
              <img
                src={snapChatIcon}
                alt="Snapchat"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div className="flex flex-col md:hidden gap-2 text-sm text-white">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <p>©2023 The Groves for Entertainment</p>
            </div>

            <div className="flex gap-0">
              <img
                src={visa}
                alt="Visa"
                className="h-5 w-[50px] object-contain"
              />
              <img
                src={mastercard}
                alt="Mastercard"
                className="h-5 w-[50px] object-contain"
              />
              <img
                src={americanExpress}
                alt="American Express"
                className="h-5 w-[50px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
