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
    <div className="">
      <div>
        <p className="text-5xl text-center mt-16 font-semibold">Lieferlösungen</p>
        <p className="text-center mt-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.</p>
      </div>
      <div className="lg:w-[80%] mx-auto md:flex justify-between items-center mt-16 gap-x-8 py-10  px-10 bg-slate-100 rounded-t-xl ">
        <div className=" lg:w-[40%] ">
          <motion.h1
            {...upwardMotion}
            className="md:text-5xl text-3xl text-center md:text-left font-semibold mb-6 flex items-center gap-x-4 "
          >
            Zollabfertigung <FaArrowRightLong className="text-3xl  mt-2" />
          </motion.h1>
          <p className="text-center md:text-left px-4 md:px-0">
          Fachkundige Unterstützung bei der Erstellung und Verwaltung von Zolldokumenten.
          </p>
        </div>

        <motion.div
          {...upwardMotion}
          className="max-w-[450px] mx-auto md:max-w-[500px] px-6 md:px-0 mt-8 md:mt-0"
        >
          <img
            className="rounded-3xl"
            src="https://media.istockphoto.com/id/1075953222/photo/aerial-view-of-cargo-ship-in-transit.jpg?s=612x612&w=0&k=20&c=wZBOOtb9HSNcUYFGOQIedaMYV1yVFQPcXbSHqy15ziw="
            alt="image"
          />
        </motion.div>
      </div>

      <div className="lg:w-[80%] mx-auto md:flex justify-between items-center  gap-x-8 py-10  px-10 bg-slate-100 rounded-b-xl">
        <motion.div
          {...upwardMotion}
          className="max-w-[450px] mx-auto md:max-w-[500px] px-6 md:px-0 mt-8 md:mt-0"
        >
          <img
            className="rounded-3xl"
            src="https://media.istockphoto.com/id/1075953222/photo/aerial-view-of-cargo-ship-in-transit.jpg?s=612x612&w=0&k=20&c=wZBOOtb9HSNcUYFGOQIedaMYV1yVFQPcXbSHqy15ziw="
            alt="image"
          />
        </motion.div>

        <motion.div
          {...upwardMotion}
          className="lg:w-[40%] px-5 mt-10 md:mt-0 text-center md:text-left"
        >
          <h1 className="md:text-5xl text-3xl font-semibold mb-8 md:mb-16 flex items-center gap-x-4">
            <FaArrowLeftLong className="text-3xl  mt-2" /> Zollabfertigung
          </h1>
          <p>
          Effiziente Unterstützung bei der Ausstellung und Verwaltung von Zolldokumenten.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerAbout;
