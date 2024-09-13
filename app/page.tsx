import { LaunchBtn } from "@/components/CtaBtn";
import { ShoutOutMarque } from "@/components/ShoutOutsMarque";
export default function Home() {
  return (
    <div
      className="flex flex-col lowercase  bg-white m-0 p-0 text-black  justify-center items-center"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex w-full h-screen overflow-y-hidden">
        <div
          className="w-[70%] h-full flex flex-col items-center px-8 pt-12"
          style={{ backgroundImage: "url('./right.svg')" }}
        >
          <h1 className="text-7xl">
            Showcase Your Project in One Go with Sandbox!
          </h1>
          <span className="mt-5 text-slate-400 pr-7 text-base">
            Showcase your student projects, hackathon creations, or personal
            work on Sandbox. Share, get feedback, sell, and inspire—all in one
            place!
          </span>
          <div className="flex justify-start w-full pt-5">
            <LaunchBtn />
          </div>
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
