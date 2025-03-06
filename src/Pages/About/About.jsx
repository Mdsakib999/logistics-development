import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerReview from "../../Components/CustomerReview";
import ContactForm from "../../Components/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Array of images
  const images = [
    "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1211787/pexels-photo-1211787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const carouselImages = [
    "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1211787/pexels-photo-1211787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  // Simple variant for a slight upward movement
  const upwardMotion = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      <div className="px-6 md:px-10 sm:py-4  md:py-8 lg:py-16">
        {/* Two-column layout */}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Column: Large Feature Image */}
          <motion.div
            className="lg:w-1/2  flex items-center justify-end"
            variants={upwardMotion}
            initial="initial"
            animate="animate"
          >
            {/* Use the first image as the main feature image */}
            <img
              src={images[0]}
              alt="Large Warehouse"
              className="w-[450px] h-[450px] rounded-lg shadow-md object-cover "
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="lg:w-1/2"
            variants={upwardMotion}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-3xl font-light md:text-4xl lg:text-5xl  tracking-wide">
              Wir sind die <br />
              <span className="text-[#D98581]">#1 in der Logistik</span> <br />
              WELTWEIT
            </h1>
            <p className="text-gray-700 text-base max-w-md mb-6 pt-10">
              Wir sind ein international anerkanntes Logistikunternehmen, dem
              weltweit vertraut wird. Nutzen Sie unseren Service, um Ihre
              Paketlieferung zu beschleunigen
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#D98581] text-white py-3 px-6 rounded-full font-md
                       hover:bg-[#c76e6c] transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>

        {/* Row of smaller images */}
        <motion.div
          className="mt-8 flex flex-wrap gap-6 justify-center"
          variants={upwardMotion}
          initial="initial"
          animate="animate"
        >
          {/* Slice off the rest of the images for the thumbnail row */}
          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Logistics ${index}`}
              className="w-42 h-32 object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300"
            />
          ))}
        </motion.div>
      </div>
      {/* transport solutions */}

      <div className="px-10 mt-10">
        <div className=" flex items-start justify-start py-10">
          <p className=" border border-blue-300 rounded-full px-2 py-1  hover:shadow-sm">
            Unsere Geschichte
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl font-md leading-13 tracking-wider">
          Transportlösungen
        </h2>
        <p className=" text-gray-500 py-6">
          Ihr Partner für Transport, Logistik und Zollabfertigung seit 2006.
        </p>
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {carouselImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[420px] flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Transport ${idx}`}
                    className="w-full h-full object-cover rounded-4xl shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="border-b  py-3 lg:py-5 xl:py-10 border-gray-200"></div>
      <CustomerReview />
      <div className="border-b py-3 lg:py-5 xl:py-10 border-gray-200"></div>
      <ContactForm />
    </div>
  );
};

export default About;
