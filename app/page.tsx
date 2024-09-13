import { ShoutOutMarque } from "@/components/ShoutOutsMarque";
export default function Home() {
  return (
    <div
      className="flex flex-col  bg-white m-0 p-0 text-black  justify-center items-center"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex w-full h-screen overflow-y-hidden">
        <div
          className="w-[70%] h-full"
          style={{ backgroundImage: "url('./right.svg')" }}
        ></div>
        <div className="w-[30%] h-full flex  items-center flex-col overflow-hidden">
          <div className="px-1 pt-4 w-full justify-center items-center flex flex-col">
            <h3 className="text-xl lowercase ">shoutouts</h3>
            <div
              className="w-full h-1 mt-4"
              style={{
                backgroundImage: "url('/top.svg')",
              }}
            ></div>
          </div>
          <ShoutOutMarque />
        </div>
      </div>
    </div>
  );
}
