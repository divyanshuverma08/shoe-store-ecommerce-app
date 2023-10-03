"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../products.module.css";

export default function SortBy() {
  const [open, setOpen] = useState(false);
  const [sortBy,setSortBy] = useState("trending");

  return (
    <div className={styles.sortBy} onClick={()=>setOpen(!open)}>
      <div className={`${styles.sortByCotainer} ${open ? styles.borderChange : ''}`}>
        <p>{sortBy}</p>
        <Image src="/arrow_down.svg" width={24} height={24} alt="drop down" />
      </div>
      <div className={open ? styles.sortByDropDown : styles.closeDropDown}>
        <p onClick={()=>setSortBy("Trending")}>Trending</p>
        <p onClick={()=>setSortBy("Price Low")}>Price Low</p>
        <p onClick={()=>setSortBy("Price High")}>Price High</p>
      </div>
    </div>
  );
}
