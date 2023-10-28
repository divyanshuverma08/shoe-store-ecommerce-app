"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "../products.module.css";
import FilterModal from "@/components/filterModal/filterModal";

export default function FilterMobile({params}) {
  const [showModal, setShowModal] = useState(false);

  const disableBodyScroll = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "unset";
  };

  const handleClose = () => {
    setShowModal(false);
    enableBodyScroll();
    // document.body.querySelector(".wrapper").classList.remove("stopScroll");
    // document.body.classList.remove("stopScroll");
  };

  const handleOpen = () => {
    setShowModal(true);
    disableBodyScroll();
    // document.body.querySelector(".wrapper").classList.add("stopScroll");
    // document.body.classList.add("stopScroll");
  };

  return (
    <>
      <div onClick={handleOpen} className={styles.titleFilter}>
        <p>Filter</p>
        <Image src="/filter_icon.svg" width={24} height={24} alt="drop down" />
      </div>
      {showModal &&
        createPortal(<FilterModal params={params} onClose={handleClose} />, document.body)}
    </>
  );
}
