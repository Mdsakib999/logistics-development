import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoWhite from "../assets/LogoWhite.png";
import LogoBlack from "../assets/LogoBlack.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const transparent = location.pathname === "/" && !isScrolled;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const bannerHeight = window.innerHeight - 80;
        setIsScrolled(window.scrollY > bannerHeight);
      } else {
        setIsScrolled(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Choose logo based on the navbar style
  const logo = transparent ? LogoWhite : LogoBlack;

  return (
    <nav
      className={`sticky top-0 w-full px-10 py-4 z-30 transition duration-300 ${
        transparent ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center">
        {/* Left: Logo */}
        <div className=" flex justify-start">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center gap-10  items-center text-lg ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-600 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            Heim
          </NavLink>
          <NavLink
            to="/uber-uns"
            className={({ isActive }) =>
              `hover:text-gray-600 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            über
          </NavLink>
          <NavLink
            to="/dienstleistungen"
            className={({ isActive }) =>
              `hover:text-gray-600 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            Dienstleistungen
          </NavLink>
          <NavLink
            to="/impressum-and-datenschutz"
            className={({ isActive }) =>
              `hover:text-gray-600 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            Impressum & Datenschutz
          </NavLink>
        </div>

        {/* Right: Contact Button */}
        <div className=" flex justify-end">
          <Link
            className={`border px-6 py-2 font-semibold text-lg rounded-full transition duration-300 ${
              transparent
                ? "text-white border-white hover:bg-gray-100 hover:text-black"
                : "text-black border-black hover:bg-gray-100 hover:text-black"
            }`}
            to="/kontakt"
          >
            Kontakt
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </NavLink>
        </div>
        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full shadow-lg transform transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } bg-white`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-2xl cursor-pointer text-black mr-2"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-center space-y-6 pb-6 text-lg">
          <NavLink
            onClick={toggleMenu}
            to="/"
            className="hover:text-[#004F98] text-black"
          >
            Startseite
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/dienstleistungen"
            className="hover:text-[#004F98] text-black"
          >
            Dienstleistungen
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/uber-uns"
            className="hover:text-[#004F98] text-black"
          >
            Über uns
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/kontakt"
            className="hover:text-[#004F98] text-black"
          >
            Kontakt
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/impressum-and-datenschutz"
            className="hover:text-[#004F98] text-black"
          >
            Impressum & Datenschutz
          </NavLink>
          <div>
            <Link
              className="px-6 py-2 font-semibold text-lg rounded-full transition duration-300 bg-black text-white hover:bg-gray-100 hover:text-black"
              to="/kontakt"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
