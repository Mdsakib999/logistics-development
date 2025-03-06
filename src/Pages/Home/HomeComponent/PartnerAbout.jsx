import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const PartnerAbout = () => {
  // Animation variant for sliding up with fade-in
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="px-4 md:px-8">
      {/* Header */}
      <div className="text-center mt-16">
        <p className="text-4xl lg:text-5xl font-semibold">Lieferlösungen</p>
        <p className="mt-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.
        </p>
      </div>

      {/* First Section: Text on left, image on right */}
      <div className="lg:w-4/5 mx-auto md:flex justify-between items-center mt-16 gap-8 py-10 px-4 md:px-10 bg-slate-100 rounded-t-xl">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <motion.h1
            {...upwardMotion}
            className="text-3xl lg:text-4xl font-semibold mb-6 flex items-center justify-center md:justify-start gap-4"
          >
            Zollabfertigung <FaArrowRightLong className="text-3xl" />
          </motion.h1>
          <motion.p
            {...upwardMotion}
            className="text-center md:text-left px-4 md:px-0 mb-10"
          >
            Fachkundige Unterstützung bei der Erstellung und Verwaltung von
            Zolldokumenten.
          </motion.p>
        </div>
        {/* Right: Image */}
        <motion.div
          {...upwardMotion}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            className="w-full max-w-md rounded-3xl shadow-md object-cover"
            src="https://images.pexels.com/photos/14400831/pexels-photo-14400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Zollabfertigung"
          />
        </motion.div>
      </div>

      {/* Second Section: Image on left, text on right */}
      <div className="lg:w-4/5 mx-auto md:flex justify-between items-center gap-8 py-10 px-4 md:px-10 bg-slate-100 rounded-b-xl">
        {/* Left: Image */}
        <motion.div
          {...upwardMotion}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            className="w-full max-w-md rounded-3xl shadow-md object-cover"
            src="https://images.pexels.com/photos/14400831/pexels-photo-14400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Zollabfertigung"
          />
        </motion.div>
        {/* Right: Text */}
        <motion.div
          {...upwardMotion}
          className="w-full md:w-1/2 px-5 text-center md:text-left mt-10 md:mt-0"
        >
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6 flex items-center justify-center md:justify-start gap-4">
            <FaArrowLeftLong className="text-3xl" /> Zollabfertigung
          </h1>
          <motion.p {...upwardMotion}>
            Effiziente Unterstützung bei der Ausstellung und Verwaltung von
            Zolldokumenten.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerAbout;
