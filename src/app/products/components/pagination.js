import React from "react";
import Image from "next/image";
import styles from "../products.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button className={styles.btn}>
        <Image
          className={styles.left}
          src="/arrow_down.svg"
          alt="prvious"
          width={16}
          height={16}
        />
        <span>Previous</span>
      </button>
      <button className={styles.btn}>
        <span>1</span>
      </button>
      <button className={styles.btn}>
        <span>2</span>
      </button>
      {/* <button className={`${styles.btn} ${styles.selected}`}>
        <span>3</span>
      </button>
      <button className={styles.btn}>
        <span>4</span>
      </button> */}
      <span>...</span>
      <button className={styles.btn}>
        <span>10</span>
      </button>
      <button className={styles.btn}>
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
