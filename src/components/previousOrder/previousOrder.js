import React from "react";
import styles from "./previousOrder.module.css";

export default function PreviousOrder({ id, items, amount, deliveryType, paymentStatus }) {
  const quantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className={styles.order}>
      <p className={styles.orderTitle}>Order {id.substring(0, 4)}...</p>
      <div className={styles.orderContent}>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>{quantity} ITEM</p>
          <p className={styles.orderContentText}>
            ₹{deliveryType === "Fast" ? amount - 100 : amount}
          </p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>Delivery</p>
          <p className={styles.orderContentText}>
            ₹{deliveryType === "Fast" ? 100 : 0}
          </p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>Gst</p>
          <p className={styles.orderContentText}>-</p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentTextTotal}>Total</p>
          <p className={styles.orderContentTextTotal}>₹{amount}</p>
        </div>
        <div className={styles.orderContentBox}>
          <p className={styles.orderContentText}>Payment</p>
          <p className={styles.orderContentText}>{paymentStatus}</p>
        </div>
      </div>
    </div>
  );
}
