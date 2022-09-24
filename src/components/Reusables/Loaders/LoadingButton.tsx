import Spinner from "./Spinner";

type LoadingProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export default function Loading({
  loading,
  btnColor = "bg-green-400",
  textColor = "text-white",
  children,
}: LoadingProps) {
  return (
    <button
      type="submit"
      className={`w-full py-3 font-semibold ${btnColor} rounded-lg outline-none border-none flex justify-center ${
        loading ? "bg-[#ccc]" : ""
      }`}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
}
