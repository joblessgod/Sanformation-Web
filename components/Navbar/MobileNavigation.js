"use client";

import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

export default function MobileNavigation() {
  const NavLinks = [
    { title: "Home", slug: "/home", desc: "Go to home" },
    { title: "About", slug: "/about", desc: "Learn more about us" },
    { title: "Services", slug: "/services", desc: "View our services" },
    { title: "Contact", slug: "/contact", desc: "Get in touch with us" },
  ];

  const [menuOpen, setMenuOpen] = useState(true);

  function toggleSideMenu() {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div
        className={`${
          menuOpen
            ? `hidden`
            : `fixed bottom-0 right-0 top-50 h-100 z-2 flex bg-gray-500 p-12`
        }`}
      />
      {menuOpen ? (
        <AlignJustify
          className="cursor-pointer text-[4rem] md:hidden md:hover:text-red-600"
          onClick={toggleSideMenu}
        />
      ) : (
        <X onClick={toggleSideMenu} />
      )}
    </>
  );
}
