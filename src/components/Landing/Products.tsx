import data from "../../data/categories.json";
import content from "../../data/content.json";
import { BidCard } from "../Cards";

export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Discover Latest Auctions</h1>
      <div className="flex justify-around flex-1 border-b-2 p-3 mt-5 border-black/50">
        {Object.values(content).map((values, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h1>{values.details.category}</h1>
          </div>
        ))}
      </div>
      <div className="flex py-10 space-x-5 overflow-x-auto">
        {Object.values(content).map((values, index) => (
          <BidCard
            key={index}
            name={values.details.brand}
            image={values.details.image}
            price={values.details.price}
          />
        ))}
      </div>

      <div className="py-10 mx-24">
      {Object.values(data).map((values, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h1 className="p-5 font-semibold text-4xl">{values.name}</h1>
          <div className="grid grid-cols-3 gap-5">
          {Object.values(content).map((values, index) => (
          <BidCard
            key={index}
            name={values.details.brand}
            image={values.details.image}
            price={values.details.price}
          />
        ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
