import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.categories}>
        <div className={styles.category}>New Drop 🔥</div>
        <div className={styles.category}>
          Men
          <Image src="/caret_down.svg" alt="drop-down" width={12} height={12} />
        </div>
        <div className={styles.category}>
          Women
          <Image src="/caret_down.svg" alt="drop-down" width={12} height={12} />
        </div>
      </div>
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="./logo.svg" fill alt="logo" />
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.search}>
          <Image src="/search.svg" fill alt="search" />
        </div>
        <div className={styles.user}>
          <Image src="/user.svg" fill alt="user profile" />
        </div>
        <div className={styles.cart}>0</div>
      </div>
    </div>
  );
}
