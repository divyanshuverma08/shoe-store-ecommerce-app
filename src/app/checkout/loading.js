import React from "react";
import Loader from "@/components/loader/loader";
import styles from "./checkout.module.css";

export default function Loading() {
  return (
    <div className={styles.checkout}>
      <div style={{ width: "min-content", margin: "50px auto" }}>
        <Loader width="200" h color="#000" />
      </div>
    </div>
  );
}
