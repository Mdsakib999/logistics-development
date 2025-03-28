import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaMailchimp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    e.target.reset();
  };

  // Animation Variants
  const fadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative bg-gray-50 min-h-screen p-6 md:p-10">
      {/* Outer container for staggered animations */}
      <div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white shadow-md rounded-4xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: Contact Info (dark background) */}
          <div className="bg-[#293037] text-white p-8 md:w-1/2 space-y-20 rounded-4xl">
            <div>
              <h2 className="text-2xl font-bold mb-1">Kontaktinformationen</h2>
              <p className="text-gray-300 font-light">
              Sagen Sie etwas, um einen Live-Chat zu starten
              </p>
            </div>
            <div className="space-y-10">
              {/* Phone */}
              <div className="flex items-center gap-8">
                <h3 className="text-gray-100 font-semibold text-2xl">
                  <FaPhone />
                </h3>
                <a href="tel:+4941545924012" className="font-semibol">+49 4154 5924012</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-8">
                <h3 className="text-gray-100 font-semibold text-2xl">
                  <MdEmail />
                </h3>
                <p className="text-white">customs@transway-transport.de</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-8">
                <h3 className="text-gray-100 font-semibold text-2xl">
                  <FaLocationDot />
                </h3>
                <p className="text-white">Barbarossastr. 61, 63571 <br />
                Gelnhausen</p>
              </div>
            </div>

            {/* Social Icons (Replace with your own) */}
            {/* <div className="flex space-x-4 pt-4 b">
              <a href="#" className="text-gray-400 hover:text-white">
                facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {" "}
                Instagram
              </a>
            </div> */}
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Top row: Name / Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  className="w-full  p-3 border-b border-gray-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefon"
                  className="w-full p-3 border-b  border-gray-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  className="w-full p-3 border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Untertan"
                  className="w-full p-3 border-b border-gray-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Ihre Nachricht..."
                  className="w-full p-1 border-b border-gray-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white rounded-full 
                           hover:bg-gray-700 cursor-pointer transition-colors "
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-b py-10 border-gray-200"></div>
        <div
          variants={fadeUp}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6  lg:items-center"
        >
          {/* Left: Hours & Info */}
          <div className="">
            <div className=" flex items-start justify-start pb-8">
              <p className=" border border-blue-300 rounded-full px-4 py-1  hover:shadow-sm">
              Besuch uns
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-md leading-13 tracking-wider">
            Standort
            </h2>
            <p className="py-6">
            Barbarossastr. 61, 63571 <br />
            Gelnhausen
            </p>
            <p className="text-gray-500">Opening Hours</p>
            <p className="text-gray-700">9 AM - 6 PM</p>
          </div>

          {/* Right: Embedded Map */}

          <div className="w-full  h-[400px] md:pl-8">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.837497542802!2d9.205274576422092!3d50.20156837154574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd25976b498cdf%3A0x875af56438d55701!2sBarbarossastra%C3%9Fe%2061%2C%2063571%20Gelnhausen%2C%20Germany!5e0!3m2!1sen!2sbd!4v1741467832712!5m2!1sen!2sbd"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;