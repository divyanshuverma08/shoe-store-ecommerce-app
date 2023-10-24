"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ScrollLink({ children, ...props }) {
  const router = useRouter();
  const { href } = props;

  const handleScroll = (e) => {
    e.preventDefault();
    if(window.location.pathname !== "/"){
      router.push(href);
      return;
    }
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
