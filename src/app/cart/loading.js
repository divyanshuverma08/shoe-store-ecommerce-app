import React from "react";
import Loader from "@/components/loader/loader";
import Link from "next/link";
import styles from "./cart.module.css"

export default function Loading() {
  return (
    <div className={styles.cart}>
    <div className={styles.header}>
      <p className={styles.headerTitle}>Saving to celebrate</p>
      <p className={styles.headerContent}>
        Enjoy up to 60% off thousands of styles during the End of Year sale -
        while suppiles last. No code needed.
      </p>
      <p className={styles.headerLinks}>
        <Link href="/checkout">Join us</Link> or <Link href="/">Sign-in</Link>
      </p>
    </div>
      <div style={{ width: "min-content",margin: "50px auto" }}>
        <Loader width="200" h color="#000" />
    </div>
  </div>
  );
}
