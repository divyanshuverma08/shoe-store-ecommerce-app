"use client";

import React from "react";
import Link from "next/link";

export default function ScrollLink({ children, ...props }) {
  const handleScroll = (e) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if(typeof window !== "undefined"){
      window.scrollTo({
        top: elem?.getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
    
  };

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
}
