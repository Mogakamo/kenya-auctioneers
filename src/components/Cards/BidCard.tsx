import Image from "next/image";

type BidCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  bids: number;
  bidCount: number;
  bidStatus: string;
};

export default function BidCard({
  id,
  name,
  image,
  price,
  description,
  bidStatus,
  bids,
  bidCount,
}: BidCardProps) {
  return (
    <div className="border-2 w-auto h-auto rounded-lg shadow-lg">
      <div className="grid grid-cols-[150px_150px]">
        {/* image */}
        <div className="relative h-96 w-full"><Image src={image} layout="fill" /></div>
        <div className="border-l-2  rounded-md">
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
          <p>{bidStatus}</p>
          <p>{bids}</p>
          <p>{bidCount}</p>
        </div>
      </div>
    </div>
  );
}
