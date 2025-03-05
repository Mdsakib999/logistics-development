import React from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="px-10">
      <div className="flex items-start justify-start">
        <p className="border border-blue-300 rounded-full px-2 py-1 hover:shadow-sm">
          Our Services
        </p>
      </div>
      <h2 className="text-5xl font-md leading-13 tracking-wider pt-8">
        Everything You <br />
        <span className="text-[#D98581]">Need</span> We Have!
      </h2>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 py-10">
        {/* Card 1 */}
        <div
          className="relative group h-[220px] bg-gray-100 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-extrabold text-xl tracking-wide">01</p>
          <p className="text-2xl py-5 font-light">Transport Logistics</p>

          {/* Hover Button */}
          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Learn More
          </Link>
        </div>

        {/* Card 2 */}
        <div
          className="relative group h-[220px] bg-gray-100 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">02</p>
          <p className="text-2xl py-5 font-light">Cargo Terminal</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Learn More
          </Link>
        </div>

        {/* Card 3 */}
        <div
          className="relative group h-[220px] bg-gray-100 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">03</p>
          <p className="text-2xl py-5 font-light">
            Temporary Storage Warehouse
          </p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Learn More
          </Link>
        </div>

        {/* Card 4 */}
        <div
          className="relative group h-[220px] bg-gray-100 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">04</p>
          <p className="text-2xl py-5 font-light">Custom Clearance</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Learn More
          </Link>
        </div>

        {/* Card 5 */}
        <div
          className="relative group h-[220px] bg-gray-100 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">05</p>
          <p className="text-2xl py-5 font-light">Freight Forwarding</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
