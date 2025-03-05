import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  // Animation variant for sliding up with fade-in
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white">
      <div className="px-10 mx-auto md:flex justify-between  gap-x-6 ">
        <div className=" flex items-start justify-start ">
          <p className=" border border-blue-300 rounded-full px-2 py-1  hover:shadow-sm">
            Why Choose Us?
          </p>
        </div>

        <div className="max-w-[550px] mx-auto md:max-w-[600px] px-6 md:px-0 mt-8 md:mt-0">
          <h2 className="text-5xl font-md leading-13 tracking-wider">
            Über unser <br /> Unternehmen
          </h2>
          <p className="font-semibold text-3xl text-gray-500 py-6 ">
            Mit Zugang zu großen Lieferanten und Herstellern weltweit.
          </p>
          <button className="px-12 py-3 border text-white bg-black border-white rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
