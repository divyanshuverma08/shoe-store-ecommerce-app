import React from "react";
import Image from "next/image";
import styles from "./filterModal.module.css";
import Filters from "@/app/products/components/filters";

export default function FilterModal({ onClose }) {
  return (
    <div className={styles.modal}>
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
      <Filters />
    </div>
  );
}
