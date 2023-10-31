import React from "react";
import Loader from "@/components/loader/loader";
import styles from "./profile.module.css";

export default function Loading() {
  return (
    <div className={styles.profile}>
      <div style={{ width: "min-content", margin: "50px auto" }}>
        <Loader width="200" h color="#000" />
      </div>
    </div>
  );
}
