"use client";

import React from "react";
import Link from "next/link";
import styles from "./orderSummary.module.css";
import { useSelector } from "react-redux";

export default function OrderSummary({ cart }) {
  const cartData = useSelector((state) => state.cart);

  return (
    <div className={cart ? styles.order : styles.orderCheckout}>
      <p className={styles.orderTitle}>Order Summary</p>
      <div className={styles.orderContent}>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>{cartData.quantity} ITEM</p>
          <p className={styles.orderContentText}>₹{cartData.totalAmount}</p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>Delivery</p>
          <p className={styles.orderContentText}>
            ₹{cartData.deliveryType === "Fast" ? 100 : 0}
          </p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>Gst</p>
          <p className={styles.orderContentText}>-</p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentTextTotal}>Total</p>
          <p className={styles.orderContentTextTotal}>
            ₹
            {cartData.deliveryType === "Fast"
              ? cartData.totalAmount + 100
              : cartData.totalAmount}
          </p>
        </div>
      </div>
      {cart && (
        <>
          {cartData.products.length > 0 && cartData.valid ? (
            <Link className={styles.checkoutButton} href="/checkout">
              Checkout
            </Link>
          ) : (
            <div className={styles.checkoutButton} style={{ opacity: "0.1" }}>
              Checkout
            </div>
          )}
          <p className={styles.promoCode}>User a promo code</p>
        </>
      )}
    </div>
  );
}
