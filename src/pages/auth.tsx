import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-[#BED7C1E5]/50">
      <div className="container bg-white shadow-xl w-96 flex items-center flex-col p-5">
        <h1 className="font-semibold text-lg">Get Started</h1>
        <p>as</p>
        <div className="flex justify-around w-full">
          <button
            onClick={() => router.push("/seller/login")}
            className="px-5 py-3 bg-[#139B20] rounded-lg text-white"
          >
            Seller
          </button>
          <button
            onClick={() => router.push("/bidder/login")}	
            className="px-5 py-3 bg-[#139B20] rounded-lg text-white"
          >
            Bidder
          </button>
        </div>
      </div>
    </div>
  );
}
