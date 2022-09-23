import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter()
  return (
    <div className="h-auto px-5 py-3 shadow-lg ">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Kenyan Auctioneers</h1>
        </div>
        <div className="border-gray-500 border-2">
          <input type="text" />
        </div>
        <div>
            <button className="border-2 p-3 rounded-lg" onClick={() => router.push("/auth")}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
