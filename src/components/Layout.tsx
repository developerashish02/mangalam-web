import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex bg-gray-100">
        <div className="w-1/4 bg-gray-800 h-screen ">
          <SideBar />
        </div>
        <div className="w-full">
          <Header />
        </div>
      </div>

      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
