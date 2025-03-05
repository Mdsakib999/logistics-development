import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
      {/* Heading */}
      <div className=" flex items-start justify-start ">
        <p className=" border border-blue-300 rounded-full px-2 py-1  hover:shadow-sm">
          Contact Us
        </p>
      </div>
      <h2 className="text-5xl font-md leading-13 tracking-wider py-8">
        Feel Free to Contact Us
      </h2>

      {/* Dark Form Container */}
      <div className="bg-[#293037] w-full max-w-7xl rounded-4xl p-6 lg:p-25 flex flex-col justify-between">
        <form className="flex flex-col space-y-6">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-3 rounded-full bg-[#363c43] placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-300 text-center"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full text-center bg-[#363c43] placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Phone (Optional) */}
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 rounded-full text-center bg-[#363c43] placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-3xl text-center bg-[#363c43] placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>

          {/* Send Button */}
          <div className="w-full flex justify-center ">
            <button
              type="submit"
              className="w-50 border py-3 rounded-full  text-white font-semibold
                        transition-colors mx-auto"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
