import React from "react";
import Image from "next/image";
import styles from "./kicksClub.module.css";

export default function KicksClub() {
  return (
    <div className={styles.kicksClub}>
      <div className={styles.info}>
        <p className={styles.heading}>Join Kicks Club Get Rewarded Today.</p>
        <p className={styles.content}>As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>
        <ul className={styles.list}>
          <li className={styles.content}>Free shipping​</li>
          <li className={styles.content}>
            ​A 15% off voucher for your next purchase​​
          </li>
          <li className={styles.content}>
            Access to Members Only products and sales​
          </li>
          <li className={styles.content}>
            Access to kicks Running and Training apps
          </li>
          <li className={styles.content}>Special offers and promotions</li>
        </ul>
        <p className={styles.content}>
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.​
        </p>
      </div>
      <button className={styles.joinButton}>
        <p>Join the club</p>
        <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
      </button>
    </div>
  );
}
