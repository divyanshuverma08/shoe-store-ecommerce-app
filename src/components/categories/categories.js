import React from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import CategoryTypes from "../categoryTypes/categoryTypes";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Categories</h2>
        </div>
        <div className={styles.headerRight}>
          <button disabled className={styles.button}>
            <div className={styles.buttonIcon}>
              <Image
                className={styles.icon}
                src="/backward_arrow.svg"
                fill
                alt="forward"
              />
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.buttonIcon}>
              <Image
                className={styles.icon}
                src="/forward_arrow.svg"
                fill
                alt="forward"
              />
            </div>
          </button>
        </div>
      </div>
     <CategoryTypes />
    </div>
  );
}
