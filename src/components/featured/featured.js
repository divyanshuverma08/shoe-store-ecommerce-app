import React from "react";
import styles from "./featured.module.css";
import Product from "../product/product";

export default function Featured() {
  return (
    <div className={styles.featured}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Don’t miss out</h2>
          <h2>new drops</h2>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.button}>SHOP NEW DROPS</button>
        </div>
      </div>
      <div className={styles.products}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  );
}
