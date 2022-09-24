import Image from "next/image";
import { useRouter } from "next/router";
import { StarIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";



export default function NavBar() {
  const router = useRouter();
  return (
    <div className="h-auto px-5 py-3 shadow-lg ">
      {/* Logo */}
      <div className="flex justify-between items-center px-5">
        <div className="relative h-12 w-48 mr-10">
          <Image src="/logo.png" layout="fill" />
        </div>
        <div className="border-gray-200 border-2 h-12 w-96 rounded-lg flex items-center p-2 flex-1">
          <input
            type="text"
            placeholder="Search Anything"
            className="w-full h-full outline-none rounded-lg"
          />
          <MagnifyingGlassIcon className="h-8" />
        </div>
        <div className="flex space-x-8 items-center ml-5">
          <button className="flex space-x-2 items-center"><FunnelIcon className="h-8" /> <span>Filter</span></button>
          <button
            className="border-2 p-3 rounded-lg"
            onClick={() => router.push("/auth")}
          >
            Get Started
          </button>
          <StarIcon className="h-8" />
        </div>
      </div>
    </div>
  );
}
