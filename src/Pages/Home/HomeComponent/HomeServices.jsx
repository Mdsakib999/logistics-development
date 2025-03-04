import React from "react";

const HomeServices = () => {
  return (
    <div className="px-10">
      <div className=" flex items-start justify-start ">
        <p className=" border border-blue-300 rounded-full px-2 py-1  hover:shadow-sm">
          Our Services
        </p>
      </div>
      <h2 className="text-5xl font-md leading-13 tracking-wider pt-8">
        Everything You <br /> <span className="text-[#D98581]">Need</span> We
        Have!
      </h2>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 py-10">
        <div className="h-[220px]  bg-gray-100 rounded-2xl p-4 text-gray-500 hover:bg-[#D98581] hover:text-white transform ">
          <p className="font-extrabold text-xl tracking-wide">01</p>
          <p className="text-2xl py-5 font-light">Transport Logistics</p>
        </div>
        <div className="h-[220px]  bg-gray-100 rounded-2xl p-4 text-gray-500 ">
          <p className="font-bold text-xl">02</p>
          <p className="text-2xl py-5 font-light">Cargo Terminal</p>
        </div>
        <div className="h-[220px]  bg-gray-100 rounded-2xl p-4 text-gray-500 ">
          <p className="font-bold text-xl">03</p>
          <p className="text-2xl py-5 font-light">
            Temporary storage warehouse
          </p>
        </div>
        <div className="h-[220px]  bg-gray-100 rounded-2xl p-4 text-gray-500 ">
          <p className="font-bold text-xl">01</p>
          <p className="text-2xl py-5 font-light">Transport Logistics</p>
        </div>

        <div className="h-[220px]  bg-gray-100 rounded-2xl p-4 text-gray-500 ">
          <p className="font-bold text-xl">01</p>
          <p className="text-2xl py-5 font-light">Transport Logistics</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
