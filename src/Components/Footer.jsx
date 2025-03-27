import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            <h2 className="md:text-5xl text-3xl tracking-wide py-5">JETZT VERBINDEN</h2>
            <p className="text-sm">© 2025. Alle Rechte reserviert.</p>
          </div>

          {/* Middle Section */}

          <div className="flex flex-col justify-center  lg:pl-12">
            <Link to="/" className="tracking-wide mb-3">Heim</Link>
            <Link to="dienstleistungen" className="tracking-wide mb-3">Dienstleistungen</Link>
            <Link to="/uber-uns" className="tracking-wide mb-3">
              über
            </Link>
            <Link
              to="/impressum-and-datenschutz"
              className="tracking-wide mb-3"
            >
              Impressum & Datenschutz
            </Link>
          </div>
          {/* Right Section */}
          <div className="flex flex-col justify-center ">
            <h2 className=" text-lg mb-2">Transway Transport</h2>
            <p className="mb-1">
              Barbarossastr. 61, 63571 <br />
              Gelnhausen
            </p>
            <a
              href="mailto:customs@transway-transport.de"
              className=" mb-1"
            >
              customs@transway-transport.de
            </a>
            <a href="tel:+4941545924012" className="font-semibol">+49 4154 5924012</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
