import Link from "next/link";
export const HeaderComponent = () => {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        backgroundImage: "url('/top.svg')",
      }}
    >
      <header
        className="w-full z-10 m-0 flex justify-between items-center custom-dashed-border  py-3 lg:py-5 bg-white text-[1.1rem] text-black px-5 "
        style={{
          backgroundImage: "url('/left-right.svg')",
          fontWeight: "500",
          lineHeight: 1,
        }}
      >
        {/* logo */}
        <Link href={"/"} className="text-2xl">
          <img className="h-10 w-auto" src="/logo.png" alt="logo" />
        </Link>
        <nav className="flex space-x-9 items-center text-black ">
          <Link href={"/"}>top projects</Link>
          <Link href={"/"}>community</Link>

          <Link href={"/"}>advertisement</Link>
        </nav>
        <div className="flex space-x-3 items-center">
          <Link
            href={"/themes"}
            className="bg-black text-white px-4 py-2.5 rounded-lg lg:block hidden"
          >
            launch your project
          </Link>
          <Link
            href={"/themes"}
            className="border text-black px-4 py-2.5 rounded-lg lg:block hidden"
          >
            sign in
          </Link>
        </div>
      </header>
      {/* <div
        className="w-full h-3 bg-white"
        style={{
          backgroundImage: "url('/top.svg')",
        }}
      ></div> */}
    </div>
  );
};
