import React from "react";
import styles from "./cart.module.css";
import Link from "next/link";
import Image from "next/image";
import ProductsMayLike from "@/components/productsMayLike/productsMayLike";
import BagItem from "./components/bagItem";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Saving to celebrate</p>
        <p className={styles.headerContent}>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className={styles.headerLinks}>
          <Link href="/">Join us</Link> or <Link href="/">Sign-in</Link>
        </p>
      </div>
      <div className={styles.cartMain}>
        <div className={styles.bag}>
          <div className={styles.bagHeader}>
            <p className={styles.bagHeaderTitle}>Your Bag</p>
            <p className={styles.bagHeaderContent}>
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>
          <div className={styles.bagContent}>
            <BagItem />
            <BagItem />
          </div>
        </div>
        <div className={styles.order}>
          <p className={styles.orderTitle}>Order Summary</p>
          <div className={styles.orderContent}>
            <div className={styles.orderContentBox}>
              <p className={styles.orderContentText}>1 ITEM</p>
              <p className={styles.orderContentText}>$130.00</p>
            </div>
            <div className={styles.orderContentBox}>
              <p className={styles.orderContentText}>Delivery</p>
              <p className={styles.orderContentText}>$6.99</p>
            </div>
            <div className={styles.orderContentBox}>
              <p className={styles.orderContentText}>Gst</p>
              <p className={styles.orderContentText}>-</p>
            </div>
            <div className={styles.orderContentBox}>
              <p className={styles.orderContentTextTotal}>Total</p>
              <p className={styles.orderContentTextTotal}>$136.99</p>
            </div>
          </div>
          <Link className={styles.checkoutButton} href="/checkout">
            Checkout
          </Link>
          <p className={styles.promoCode}>User a promo code</p>
        </div>
      </div>
      <ProductsMayLike />
    </div>
  );
}
