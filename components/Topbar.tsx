import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
};

export default Topbar;
