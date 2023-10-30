import React from "react";
import Image from "next/image";
import styles from "./categoryTypes.module.css";
import Link from "next/link";

export default function CategoryTypes() {
  return (
    <div className={styles.categoryTypes}>
      <div className={styles.categoryOne}>
        <div className={styles.categoryImageContainer}>
          <Image
            className={styles.categoryImage}
            src="/lifestyle_shoe_category.png"
            fill
            alt="category"
          />
        </div>
        <div className={styles.categoryTab}>
          <div className={styles.categoryInfo}>
            <p>Casual</p>
            <p>Shoes</p>
          </div>
          <Link href="/products/?category=casual" className={styles.categoryButton}>
            <div className={styles.categoryButtonIcon}>
              <Image
                className={styles.categoryIcon}
                src="/arrow_trend_right_up.svg"
                fill
                alt="forward"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.categoryTwo}>
        <div className={styles.categoryImageContainer}>
          <Image
            className={styles.categoryImage}
            src="/basketball_shoe_category.png"
            fill
            alt="opne"
          />
        </div>
        <div className={styles.categoryTab}>
          <div className={styles.categoryInfo}>
            <p>Basketball</p>
            <p>Shoes</p>
          </div>
          <Link Link href="/products/?category=basketball" className={styles.categoryButton}>
            <div className={styles.categoryButtonIcon}>
              <Image
                className={styles.categoryIcon}
                src="/arrow_trend_right_up.svg"
                fill
                alt="open"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
