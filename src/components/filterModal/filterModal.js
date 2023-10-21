"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./filterModal.module.css";
import Filters from "@/app/products/components/filters";

export default function FilterModal({params,onClose }) {

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

  const { height, width } = useWindowDimensions();

  return (
    <div className={styles.modal} style={{height: height}}>
      <div className={styles.filtersMobileHeader}>
        <h4>Filters</h4>
        <Image
          onClick={() => onClose()}
          src="close_icon.svg"
          alt="close"
          width={24}
          height={24}
        />
      </div>
      <Filters modal={true} params={params} onClose={onClose} />
    </div>
  );
}
