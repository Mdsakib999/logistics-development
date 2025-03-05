import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerReview from "../../Components/CustomerReview";
import ContactForm from "../../Components/ContactForm";

const About = () => {
  // Array of images
  const images = [
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
      <div className="px-6 md:px-10  lg:py-16">
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
              We are <br /> <span className="text-[#D98581]">#1 Logistics</span>{" "}
              <br />
              WORLDWIDE
            </h1>
            <p className="text-gray-700 text-base max-w-md mb-6 pt-10">
              We are an international scale company that has been trusted by all
              corners of the world. Use our company to expedite your package
              delivery!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#D98581] text-white py-3 px-6 rounded-full font-md
                       hover:bg-[#c76e6c] transition-colors duration-300"
            >
              GET IN TOUCH
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

      <div className="px-10">
        <h2 className="text-5xl font-md leading-13 tracking-wider">
          Transport Solutions
        </h2>
        <p className=" text-gray-500 py-6">
          Ihr Partner für Transport, Logistik und Zollabfertigung seit 2006.
        </p>
        <div>{/* carousel images  */}</div>
      </div>
      <CustomerReview />
      <ContactForm />
    </div>
  );
};

export default About;
