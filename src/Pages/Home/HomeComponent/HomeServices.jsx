import React from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="px-10">
      <div className="flex items-start justify-start">
        <p className="border border-blue-300 rounded-full px-2 py-1 hover:shadow-sm">
          Unsere Dienstleistungen
        </p>
      </div>
      <h2 className="text-5xl font-md leading-13 tracking-wider pt-8">
        Alles, was Sie <br />
        <span className="text-[#D98581]">brauchen</span>,haben wir!
      </h2>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 py-10">
        {/* Card 1 */}
        <div
          className="flex flex-col items-start justify-between relative group h-[220px] bg-gray-200 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-extrabold text-xl tracking-wide">01</p>
          <p className="text-2xl py-5 font-light">Transportlogistik</p>

          {/* Hover Button */}
          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col items-start justify-between relative group h-[220px] bg-gray-200 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">02</p>
          <p className="text-2xl py-5 font-light">Frachtterminal</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col items-start justify-between relative group h-[220px] bg-gray-200 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">03</p>
          <p className="text-2xl py-5 font-light">Zwischenlager</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Card 4 */}
        <div
          className="flex flex-col items-start justify-between relative group h-[220px] bg-gray-200 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">04</p>
          <p className="text-2xl py-5 font-light">Zollabfertigung</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Card 5 */}
        <div
          className="flex flex-col items-start justify-between relative group h-[220px] bg-gray-200 rounded-2xl p-4 text-gray-500 
                        transition-all duration-300 hover:bg-[#D98581] hover:text-white"
        >
          <p className="font-bold text-xl">05</p>
          <p className="text-2xl py-5 font-light">Spedition</p>

          <Link
            to="/dienstleistungen"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       inline-block mt-4 px-4 py-2 border border-white text-white 
                       rounded-full hover:bg-white hover:text-[#D98581]"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
