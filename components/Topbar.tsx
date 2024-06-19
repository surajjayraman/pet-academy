import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const Topbar = () => {

  const topRoutes = [
    { name: "Instructor", path: "/instructor/courses" },
    { name: "Learning", path: "/learning" },
  ]

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>
      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input
          className="flex-grow bg-[#FFF8EB] rounded-l-full border-none outline-none text-sm pl-4 py-3"
          placeholder="Search for courses"
        />
        <button className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
