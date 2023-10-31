import React from "react";
import styles from "./product.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Product({slug,model,category,price,newRelease,grid,image}) {
  return (
    <Link href={`/products/${slug}`} className={`${styles.product} ${grid && styles.grid}`}>
      <div className={styles.productImageContainer}>
        {newRelease && <div className={styles.newTag}>New</div>}
        <Image
          className={styles.productImage}
          src={image}
          alt="show"
          fill
        />
      </div>
      <div className={styles.productInfo}>
        <p>{model}</p>
        <p>{category}</p>
      </div>
      <div className={styles.productButton}>
        VIEW PRODUCT - <span>₹{price}</span>
      </div>
    </Link>
  );
}
