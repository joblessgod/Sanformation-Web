import Link from "next/link";
import React from "react";

export default function Navigation() {
  const NavLinks = [
    { title: "Home", slug: "/home", desc: "Go to home" },
    { title: "About", slug: "/about", desc: "Learn more about us" },
    { title: "Services", slug: "/services", desc: "View our services" },
    { title: "Contact", slug: "/contact", desc: "Get in touch with us" },
  ];
  return NavLinks.map((item, index) => [
    <ul key={index} className="flex space-x-4 items-center justify-between">
      <Link
        href={item.slug}
        className="hover:text-purple-700 transition-transform duration-300"
      >
        {item.title}
      </Link>
    </ul>,
  ]);
}
