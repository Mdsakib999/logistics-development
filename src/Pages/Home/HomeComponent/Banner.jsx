import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen flex  justify-start text-white  -top-20 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 "></div>

      <div className="relative p-10 rounded-xl max-w-3xl">
        <h1 className="text-xl lg:text-7xl font-extrabold mb-4 mt-20 leading-12 lg:leading-18 tracking-wide ">
          Ultimative <br /> Lösungen für Ihre Geschäftsträume
        </h1>
      </div>
    </div>
  );
};

export default Banner;
