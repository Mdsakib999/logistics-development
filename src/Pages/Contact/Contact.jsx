import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaMailchimp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

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
                <p className="text-white">+1 (123) 456-7890</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-8">
                <h3 className="text-gray-100 font-semibold text-2xl">
                  <MdEmail />
                </h3>
                <p className="text-white">info@yourdomain.com</p>
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
            <div className="flex space-x-4 pt-4">
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
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Top row: Name / Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full  p-3 border-b border-gray-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-3 border-b  border-gray-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border-b border-gray-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message..."
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.090575191847!2d110.41623791415592!3d-7.890350980638159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bad1e327db44b%3A0xb1c386621e00fe30!2sKota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1645952321163!5m2!1sen!2sid"
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
