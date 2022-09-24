import data from "../../data/content.json"

export default function Hero() {
    console.log(data)
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-[#BED7C1]/90 w-full">
      <h1 className="text-4xl mb-24">
        Find Things you want. Only on Kenyan Auctioneers
      </h1>
      <div className="relative">
        <div className="flex space-x-10">
            {Object.values(data).map((values, index) => (
                <div key={index} className="">
                    <h1>{values.details.category}</h1>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
