import React from "react";
import styles from "./product.module.css";
import Image from "next/image";

export default function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.productImageContainer}>
        <div className={styles.newTag}>New</div>
        <Image
          className={styles.productImage}
          src="/product.png"
          alt="show"
          fill
        />
      </div>
      <div className={styles.productInfo}>
        <p>ADIDAS 4DFWD X PARLEY</p>
        <p>RUNNING SHOES</p>
      </div>
      <div className={styles.productButton}>
        VIEW PRODUCT - <span>$120</span>
      </div>
    </div>
  );
}
