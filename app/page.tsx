import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col  bg-white m-0 p-0 text-black  justify-center items-center"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex w-full h-screen overflow-y-hidden">
        <div className="w-4/6 h-full border-r"></div>
        <div className="w-2/6 h-full border-l"></div>
      </div>
    </div>
  );
}
