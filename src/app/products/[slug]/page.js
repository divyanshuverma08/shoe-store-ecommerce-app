import React from "react";
import styles from "./product.module.css";
import Image from "next/image";

export default function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.productImages}>
        <div className={styles.productImageTop}>
          <div className={styles.image}>
            <Image src="/product/img1.png" fill alt="product" />
          </div>
          <div className={styles.image}>
            <Image src="/product/img2.png" fill alt="product" />
          </div>
        </div>
        <div className={styles.productImageBottom}>
          <div className={styles.image}>
            <Image src="/product/img3.png" fill alt="product" />
          </div>
          <div className={styles.image}>
            <Image src="/product/img4.png" fill alt="product" />
          </div>
        </div>
      </div>
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
          <div className={styles.colors}>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
          </div>
        </div>
        <div className={styles.productSize}>
          <div className={styles.productSizeHeader}>
            <h4 className={styles.productSizeTitle}>SIZE</h4>
            <p className={styles.productSizeTitle}>SIZE CHART</p>
          </div>
          <div className={styles.sizes}>
            <div className={styles.size}>38</div>
            <div className={styles.size}>40</div>
            <div className={styles.size}>41</div>
            <div className={styles.size}>42</div>
          </div>
        </div>
        <div className={styles.productBuy}>
          <div className={styles.productBuyHeader}>
            <div className={styles.addToCart}>ADD TO CART</div>
            <div className={styles.addToCart}></div>
          </div>
          <div className={styles.buyNow}>BUY IT NOW</div>
        </div>
        <div className={styles.productAbout}>
          <h4 className={styles.productAboutTitle}>ABOUT THE PRODUCT</h4>
          <div className={styles.productAboutContent}>
          <p className={styles.productAboutColor}>Shadow Navy / Army Green</p>
          <p>This product is excluded from all promotional discounts and offers.</p>
          <ul>
            <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
            <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
