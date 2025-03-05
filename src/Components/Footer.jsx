import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#293037] text-white py-8 px-6 md:px-16  rounded-t-4xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-xl mb-2">Transway Transport</h1>
              <p className="mb-6">
                Ihr Partner für Transport und Logistiklösungen.
              </p>
            </div>
            <h2 className="text-5xl tracking-wide py-5">CONNECT NOW</h2>
            <p className="text-sm">© 2025. All rights reserved.</p>
          </div>

          {/* Middle Section */}

          <div className="flex flex-col justify-center">
            <h3 className="tracking-wide mb-3">HOME</h3>
            <h3 className="tracking-wide mb-3">SERVICES</h3>
            <h3 className="tracking-wide mb-3">ABOUT</h3>
            <h3 className="tracking-wide mb-3">PRIVACY POLICY</h3>
          </div>
          {/* Right Section */}
          <div className="flex flex-col justify-center ">
            <h2 className=" text-lg mb-2">Zoll-Trans-Service GmbH</h2>
            <p className="mb-1">Zum Stichkanal 1 A</p>
            <p className="mb-1">16727 Velten</p>
            <a
              href="mailto:customs@zoll-trans.de"
              className="text-blue-300 underline mb-1"
            >
              customs@zoll-trans.de
            </a>
            <p className="font-bold">+99 (0) 0000 000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
