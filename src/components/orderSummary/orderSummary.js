import React from "react";
import Link from "next/link";
import styles from "./orderSummary.module.css";

export default function OrderSummary({ cart }) {
  return (
    <div className={cart ? styles.order : styles.orderCheckout}>
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
      {cart && (
        <>
          <Link className={styles.checkoutButton} href="/checkout">
            Checkout
          </Link>
          <p className={styles.promoCode}>User a promo code</p>
        </>
      )}
    </div>
  );
}
