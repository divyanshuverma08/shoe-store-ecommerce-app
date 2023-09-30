import React from "react";
import Image from "next/image";
import styles from "./productsMayLike.module.css";
import Product from "../product/product";

export default function ProductsMayLike() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>You may also like</h2>
        </div>
        <div className={styles.headerRight}>
          <button disabled className={styles.button}>
            <div className={styles.buttonIcon}>
              <Image
                className={styles.icon}
                src="/backward_arrow_white.svg"
                fill
                alt="forward"
              />
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.buttonIcon}>
              <Image
                className={styles.icon}
                src="/forward_arrow_white.svg"
                fill
                alt="forward"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
