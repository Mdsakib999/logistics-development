import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import PartnerAbout from "../Home/HomeComponent/PartnerAbout";
import ContactForm from "../../Components/ContactForm";
import CustomerReview from "../../Components/CustomerReview";

const servicesCards = [
  {
    img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Zollabfertigungsdienste",
    text: "Zollabfertigung",
    desc: "Unterstützung von Experten bei der Abwicklung der Zollformalitäten und der Vorbereitung der Begleitpapiere",
  },
  {
    img: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lagerung und Verpackung",
    text: "unsere Erfahrung",
    desc: "Der Transport hat alle ihre Lkw-Fähigkeiten im ganzen Land kombiniert, was bedeutet, dass Frachtmakler und Disponenten voaadea  sadlsl.",
  },
  {
    img: "https://images.pexels.com/photos/14400831/pexels-photo-14400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Transportvermittlung",
    text: "Lkw-Fähigkeiten",
    desc: "Vertrauen Sie auf unsere Erfahrung und Expertise, um Ihre Waren effizient an ihr Ziel zu bringen.",
  },
];

const moveUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full px-4  lg:px-16 py-12">
      <button className="border border-blue-500 px-4 py-1 rounded-full font-semibold">
        Unser Dienstleistungen
      </button>

      <p className="text-3xl md:text-5xl font-md mt-7 mb-7 md:mb-16">
        Unsere reibungslosen Lösungen
      </p>

      <div className="flex flex-col md:flex-row gap-3 items-center justify-between group">
        {servicesCards.map((service, index) => (
          <motion.div
            {...moveUp}
            key={index}
            className="max-w-md relative  mb-12 md:mb-0"
          >
            <p className="absolute right-3 top-2 border border-white text-black px-4 bg-gray-5 rounded-full py-1 bg-gray-50">
              {service.text}
            </p>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto mx-auto rounded-2xl"
            />
            <h2 className="text-xl font-bold mt-4">{service.title}</h2>
            <p className="mt-2 text-md text-gray-600">{service.desc}</p>
            <button className="text-xl flex items-center gap-x-3 mt-4 border-b pb-1 text-gray-500 hover:text-red-400 cursor-pointer">
              Learn More <MdArrowOutward className="text-2xl" />
            </button>
          </motion.div>
        ))}
      </div>

      <PartnerAbout></PartnerAbout>

      <CustomerReview></CustomerReview>

      <ContactForm></ContactForm>
    </div>
  );
};

export default Services;
