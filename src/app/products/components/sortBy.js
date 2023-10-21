"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../products.module.css";

export default function SortBy({ params }) {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(params.sort ? (params.sort === "asc" ? "Price Low" : "Price High") :"Trending");

  const handleSort = (sort) => {
    setSortBy(sort);
    if (sort === "Trending") {
      const {page,sort,...rest } = params;
      const query = new URLSearchParams(rest);
      router.push(`/products?` + query, { scroll: false });
      return;
    }

    if (sort === "Price Low") {
      const {page,...rest} = params;
      const query = new URLSearchParams({ ...rest, sort: "asc" });
      router.push(`/products?` + query, { scroll: false });
      return;
    }

    if (sort === "Price High") {
      const {page,...rest} = params;
      const query = new URLSearchParams({ ...rest, sort: "desc" });
      router.push(`/products?` + query, { scroll: false });
      return;
    }
  };

  return (
    <div className={styles.sortBy}>
      <div className={styles.sortByCotainer}>
        <p>{sortBy}</p>
        <Image src="/arrow_down.svg" width={24} height={24} alt="drop down" />
      </div>
      <div className={styles.sortByDropDown}>
        <p onClick={() => handleSort("Trending")}>Trending</p>
        <p onClick={() => handleSort("Price Low")}>Price Low</p>
        <p onClick={() => handleSort("Price High")}>Price High</p>
      </div>
    </div>
  );
}
