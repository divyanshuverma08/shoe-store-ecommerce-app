import React from "react";
import styles from "./reviewCard.module.css";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.review}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>Good Quality</p>
            <p className={styles.infoContent}>
              I highly recommend shopping from kicks
            </p>
          </div>
          <div className={styles.userImage}>
            <Image src="/user-img.jpeg" alt="user image" fill />
          </div>
        </div>
        <div className={styles.stars}>
          <div className={styles.star}>
            <Image src="/star.svg" fill alt="star" />
          </div>
          <div className={styles.star}>
            <Image src="/star.svg" fill alt="star" />
          </div>
          <div className={styles.star}>
            <Image src="/star.svg" fill alt="star" />
          </div>
          <div className={styles.star}>
            <Image src="/star.svg" fill alt="star" />
          </div>
          <div className={styles.star}>
            <Image src="/star.svg" fill alt="star" />
          </div>
          <p>5.0</p>
        </div>
      </div>
      <div className={styles.reviewImage}>
        <Image src="/review-img.png" alt="review" fill />
      </div>
    </div>
  );
}
