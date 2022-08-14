import Link from "next/link";
import React from "react";

const CategoriesNav = () => {
  return (
    <div className="my-5 mx-20 border-b-2">
      <ul className="flex space-x-48 justify-center p-1 cursor-pointer">
        <li className="hover:text-black hover:font-semibold hover:underline underline-offset-4 active:font-bold">
          <Link href="#">Vehicles</Link>
        </li>
        <li className="hover:text-black hover:font-semibold hover:underline underline-offset-4 active:font-bold">Apartments</li>
        <li className="hover:text-black hover:font-semibold hover:underline underline-offset-4 active:font-bold">Land</li>
        <li className="hover:text-black hover:font-semibold hover:underline underline-offset-4 active:font-bold">Machinery</li>
      </ul>
    </div>
  );
};

export default CategoriesNav;
