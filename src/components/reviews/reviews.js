"use client";

import React, { useEffect, useState } from "react";
import styles from "./reviews.module.css";
import ReviewCard from "../reviewCard/reviewCard";

export default function Reviews() {
  const [mounted, setMounted] = useState(false);

  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);

    return windowDimensions;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <div className={styles.reviews}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>REVIEWS</h2>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.button}>SEE ALL</button>
        </div>
      </div>
      <div className={styles.cards}>
        {mounted && width < 768 ? (
          <ReviewCard />
        ) : (
          <>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </>
        )}
      </div>
    </div>
  );
}
