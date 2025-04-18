import React from "react";
import MainLogo from "./MainLogo";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b-2 backdrop-blur-[3px]">
      <div className="container mx-auto flex justify-between items-center ">
        <MainLogo />
        <div className="flex gap-4">
          <Navigation />
          {/* <LoginButton /> */}
        </div>
      </div>
    </nav>
  );
}
