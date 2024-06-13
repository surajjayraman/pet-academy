import Topbar from "@/components/Topbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default HomeLayout;
