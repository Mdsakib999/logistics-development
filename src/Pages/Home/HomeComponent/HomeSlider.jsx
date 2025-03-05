import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import { div } from "framer-motion/client";
import { MdArrowOutward } from "react-icons/md";
const HomeSlider = () => {
  return (
    <div className="bg-gray-100">
      <div className="border-b border-gray-200 mt-16"></div>
      <div className="flex justify-center items-center mt-20 mb-10 mx-auto max-w-2xl px-6">
        <div>
          <h2 className="text-4xl lg:text-5xl font-md leading-13 tracking-wider text-center">
            Entdecken Sie unsere flexiblen <br /> Versandoptionen für
            <span className="text-gray-400"> jedes Bedürfnis weltweit.</span>
          </h2>
          <p className="text-md lg:text-xl text-center font-light py-6 ">
            UNSERE MISSION ist es, erstklassige Qualität und Dienstleistungen
            allen unseren wertvollen Kunden zu bieten und stets innovativ und
            aufmerksam auf dem Markt zu sein, den wir bedienen.
          </p>
          <div className="my-16">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[240px] h-[320px] max-w-md mx-auto "
            >
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1561475699-fa66c7246834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Partner image 1"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1494961104209-3c223057bd26?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Partner image 2"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Partner image 3"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </SwiperSlide>
            </Swiper>

            <div className="flex items-center justify-center py-10">
              <Link to="/dienstleistungen">
                <button
                  className="inline-flex items-center gap-2 px-5 py-3 border text-white bg-[#D98581] rounded-full
                     transition-colors duration-300 hover:bg-[#c76e6c]"
                >
                  Mehr erfahren
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-16"></div>
    </div>
  );
};

export default HomeSlider;
