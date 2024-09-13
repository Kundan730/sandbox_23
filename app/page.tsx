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
          className="w-[70%] h-full flex flex-col items-center pl-8 pt-12"
          style={{ backgroundImage: "url('./right.svg')" }}
        >
          <h1 className="text-6xl">
            Showcase Your Project in One Go with Sandbox!
          </h1>
        </div>
        <div className="w-[30%] h-full flex  items-center flex-col overflow-hidden">
          <div className="px-1 pt-4 w-full justify-center items-center flex flex-col">
            <h3 className="text-xl lowercase underline ">shoutouts</h3>
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
