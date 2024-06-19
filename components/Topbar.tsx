import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
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
        
        </div>
    </div>
  );
};

export default Topbar;
