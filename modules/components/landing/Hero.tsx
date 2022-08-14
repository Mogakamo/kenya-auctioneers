import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-72 bg-[#BED7C1E5]/90 flex justify-center pt-20">
        <h1 className="text-4xl">
          Find things you want. Only on Kenyan Auctioneers
        </h1>
      </div>
      <div className="absolute inset-64">
        <div className="flex space-x-24">
          <div className="flex items-center flex-col space-y-3 justify-center">
            <div className="rounded-full border-2 h-24 w-24"></div>
            <h1>Vehicles</h1>
          </div>
          <div className="flex items-center flex-col space-y-3 justify-center">
            <div className="rounded-full border-2 h-24 w-24"></div>
            <h1>Machinery</h1>
          </div>
          <div className="flex items-center flex-col space-y-3 justify-center">
            <div className="rounded-full border-2 h-24 w-24"></div>
            <h1>Apartments</h1>
          </div>
          <div className="flex items-center flex-col space-y-3 justify-center">
            <div className="rounded-full border-2 h-24 w-24"></div>
            <h1>Land</h1>
          </div>
          <div className="flex items-center flex-col space-y-3 justify-center">
            <div className="rounded-full border-2 h-24 w-24"></div>
            <h1>Livestock</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
