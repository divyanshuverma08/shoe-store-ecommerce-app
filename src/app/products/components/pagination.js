"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../products.module.css";

function Pagination({ params, hasPrev, hasNext, totalPages }) {
  const router = useRouter();
  const page = parseInt(params.page) || 1;

  const handleScroll = () => {
    const targetId = "titleBar";
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    const query = new URLSearchParams({ ...params, page: page + 1 });
    router.push(`/products?` + query,{scroll: false});
    handleScroll()
  };

  const handlePrev = () => {
    const query = new URLSearchParams({ ...params, page: page - 1 });
    router.push(`/products?` + query,{scroll: false});
    handleScroll()
  };

  const handleToNumber = (pageNumber) => {
    const query = new URLSearchParams({ ...params, page: pageNumber });
    router.push(`/products?` + query,{scroll: false});
    handleScroll()
  };

  let pageNumbers = [];

  for (var i = page - 1; i <= page + 2; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;

    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button disabled={!hasPrev} className={styles.btn} onClick={handlePrev}>
        <Image
          className={styles.left}
          src="/arrow_down.svg"
          alt="prvious"
          width={16}
          height={16}
        />
        <span>Previous</span>
      </button>
      {(page === totalPages && totalPages !== 1) && (
        <>
          <button className={styles.btn} onClick={() => handleToNumber(1)}>
            <span>1</span>
          </button>
          <span>...</span>
        </>
      )}
      {pageNumbers.map((ele, i) => (
        <button
          key={i}
          className={`${styles.btn} ${page === ele && styles.selected}`}
          onClick={() => handleToNumber(ele)}
        >
          <span>{ele}</span>
        </button>
      ))}
      {page + 2 < totalPages && (
        <>
          <span>...</span>
          <button className={styles.btn} onClick={() => handleToNumber(totalPages)}>
            <span>{totalPages}</span>
          </button>
        </>
      )}
      <button disabled={!hasNext} className={styles.btn} onClick={handleNext}>
        <span>Next</span>
        <Image
          className={styles.right}
          src="/arrow_down.svg"
          alt="next"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}

export default Pagination;
