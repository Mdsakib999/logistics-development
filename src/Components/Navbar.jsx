import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav
      className={`sticky top-0 w-full px-10 py-4 z-30 transition duration-300 ${
        location.pathname === "/"
          ? isScrolled
            ? "bg-white text-black"
            : "bg-transparent text-white"
          : "bg-white  text-black"
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <NavLink to="/">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop,q=95/YbNq66ZkMbhaRlZg/logo-A1aBVVw7yjh5Vnln.png"
              alt="Logo"
              className="h-12"
            />
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center gap-7 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/uber-uns"
            className={({ isActive }) =>
              `hover:text-gray-300 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/dienstleistungen"
            className={({ isActive }) =>
              `hover:text-gray-300 transition duration-300 ${
                isActive ? "font-semibold border-b-2" : ""
              }`
            }
          >
            SERVICES
          </NavLink>
        </div>

        {/* Right: Contact Button */}
        <div className="flex-1 flex justify-end">
          <Link
            className="border text-white px-6 py-2 font-semibold text-lg rounded-full hover:bg-gray-100 hover:text-black transition duration-300"
            to="/kontakt"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between">
        <div>
          <NavLink to="/">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop,q=95/YbNq66ZkMbhaRlZg/logo-A1aBVVw7yjh5Vnln.png"
              alt="Logo"
              className="h-12"
            />
          </NavLink>
        </div>
        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-center space-y-6 pb-6 text-lg text-gray-800">
          <NavLink onClick={toggleMenu} to="/" className="hover:text-[#004F98]">
            Startseite
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/dienstleistungen"
            className="hover:text-[#004F98]"
          >
            Dienstleistungen
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/uber-uns"
            className="hover:text-[#004F98]"
          >
            Über uns
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/kontakt"
            className="hover:text-[#004F98]"
          >
            Kontakt
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/impressum-and-datenschutz"
            className="hover:text-[#004F98]"
          >
            Impressum & Datenschutz
          </NavLink>
          <div>
            <Link
              className="bg-[#004F98] text-white px-6 py-2 font-semibold text-lg rounded-full hover:bg-[#003366]"
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
