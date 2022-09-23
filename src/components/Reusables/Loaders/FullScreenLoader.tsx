import Spinner from "./Spinner";

export default function FullScreenLoader() {
  return (
    <div className="h-screen w-screen fixed"> 
      <div className="flex items-center justify-center">
        <Spinner width={8} height={8} />
      </div>
    </div>
  );
}
