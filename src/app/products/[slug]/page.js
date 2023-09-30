import React from "react";
import styles from "./product.module.css";
import ProductImages from "./components/productImages";
import ProductsMayLike from "@/components/productsMayLike/productsMayLike";

export default function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <ProductImages />
        <div className={styles.prouctDetails}>
          <div className={styles.productInfo}>
            <div className={styles.newRelease}>New Release</div>
            <div className={styles.name}>
              <h1>ADIDAS 4DFWD X PARLEY</h1>
              <h2>RUNNING SHOES</h2>
            </div>
            <h3 className={styles.price}>$125.00</h3>
          </div>
          <div className={styles.productColor}>
            <h4 className={styles.productColorTitle}>COLOR</h4>
            <div className={`${styles.productColorIcon} blue`}></div>
          </div>
          <div className={styles.productSize}>
            <div className={styles.productSizeHeader}>
              <h4 className={styles.productSizeTitle}>SIZE</h4>
              <p className={styles.productSizeTitle}>SIZE CHART</p>
            </div>
            <div className={styles.sizes}>
              <div className={`${styles.size} ${styles.selectedSize}`}>6</div>
              <div className={`${styles.size} ${styles.unavailableSize}`}>
                7
              </div>
              <div className={`${styles.size} ${styles.unavailableSize}`}>
                8
              </div>
              <div className={styles.size}>9</div>
              <div className={styles.size}>10</div>
              <div className={styles.size}>11</div>
              <div className={styles.size}>12</div>
            </div>
          </div>
          <div className={styles.productBuy}>
            <div className={styles.addToCart}>ADD TO CART</div>
            <div className={styles.buyNow}>BUY IT NOW</div>
          </div>
          <div className={styles.productAbout}>
            <h4 className={styles.productAboutTitle}>ABOUT THE PRODUCT</h4>
            <div className={styles.productAboutContent}>
              <p>Shadow Navy / Army Green</p>
              <p>
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul>
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductsMayLike />
    </div>
  );
}
