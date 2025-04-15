import React from "react";
import MainLogo from "./MainLogo";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b-2 backdrop-blur-[3px]">
      <div className="container mx-auto flex !items-center space-x-10">
        <MainLogo />
        <Navigation />
        <LoginButton/>
      </div>
    </nav>
  );
}
