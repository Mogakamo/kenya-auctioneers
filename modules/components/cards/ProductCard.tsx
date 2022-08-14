import Image from "next/image";
import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const ProductCard = () => {
  return (
    <div className="h-auto border-2 w-[400px] rounded-md my-5 grid grid-cols-2">
      <div className="left border-transparent rounded-md relative h-full w-full">
        <Image
          src="/car-1.jpg"
          layout="fill"
          className="rounded-md"
          objectFit="cover"
        />
      </div>
      <div className="right p-5 space-y-3">
        <p className="flex flex-col">
          <span className="font-bold">Product Name: </span> 2018, Audi
        </p>
        <h1>
          {" "}
          <span className="font-bold">Transmission: </span>Manual
        </h1>
        <h1>
          <span className="font-bold">Mileage: </span> 12, 000 km
        </h1>
        <h1 className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-8 w-8" /> Nairobi, Kenya
        </h1>
        <h1 className="flex flex-col">
          <span className="font-bold">Starting Price: </span> KES 3, 500,000
        </h1>
        <p className="relative">
          <span>Bid ends in: </span>
          <div className="h-8 w-24"></div>
        </p>
        <button className="border text-white bg-green-900 w-full py-3 rounded-lg uppercase">Bid Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
