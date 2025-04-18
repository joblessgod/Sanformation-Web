import React from "react";
import MainLogo from "./MainLogo";
import WebNavigation from "./WebNavigation";
import LoginButton from "./LoginButton";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b-2 backdrop-blur-[5px]">
      <div className="container mx-auto flex justify-between items-center ">
        <MainLogo />
        <div className="flex gap-4">
          <span className="hidden md:flex gap-4">
            <WebNavigation />
          </span>
          <span className="flex md:hidden">
            <MobileNavigation />
          </span>
          {/* <LoginButton /> */}
        </div>
      </div>
    </nav>
  );
}
