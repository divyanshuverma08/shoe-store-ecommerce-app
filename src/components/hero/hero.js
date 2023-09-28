import React from "react";
import HeroImages from "./components/heroImages";
import styles from "./hero.module.css";


export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>DO IT <span className={styles.titleRight}>RIGHT</span></span>
        <span className={styles.titleSpan}></span>
      </div>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <p>Nike product of the year</p>
        </div>
        <div className={styles.product}>
          <h2>NIKE AIR MAX</h2>
          <p>{"Nike introducing the new air max for everyone's comfort"}</p>
          <button>SHOP NOW</button>
        </div>
        <HeroImages />
      </div>
    </div>
  );
}
