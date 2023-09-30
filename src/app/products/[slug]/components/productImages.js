"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../product.module.css";
import { Carousel } from "react-responsive-carousel";

export default function ProductImages() {
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
    mounted && <div className={styles.productImages}>
      {width > 768 ? (
        <>
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
        </>
      ) : (
        <Carousel emulateTouch={true} showArrows={false} showStatus={false} className={styles.cls}>
          <div>
            <img alt="product" src="/product/img1.png" />
          </div>
          <div>
            <img alt="product" src="/product/img2.png" />
          </div>
          <div>
            <img alt="product" src="/product/img3.png" />
          </div>
          <div>
            <img alt="product" src="/product/img4.png" />
          </div>
        </Carousel>
      )}
    </div>
  );
}
