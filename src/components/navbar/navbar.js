"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import ScrollLink from "../scrollLink/scrollLink";
import Cart from "./cart";
import Sidebar from "../sidebar/sidebar";
import Search from "../search/search";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.categories}>
        <ScrollLink href="/#featured" className={styles.category}>
          New Drop 🔥
        </ScrollLink>
        <Link href="/products?gender=Men" className={styles.category}>
          Men
          {/* <Image src="/caret_down.svg" alt="drop-down" width={12} height={12} /> */}
        </Link>
        <Link href="/products?gender=Women" className={styles.category}>
          Women
          {/* <Image src="/caret_down.svg" alt="drop-down" width={12} height={12} /> */}
        </Link>
      </div>
      <Sidebar />
      <Link href="/" className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="/logo.svg" fill alt="logo" />
        </div>
      </Link>
      <div className={styles.action}>
        <Search />
        <Link href="/profile" className={styles.user}>
          <Image src="/user.svg" fill alt="user profile" />
        </Link>
        <Cart />
      </div>
    </div>
  );
}
