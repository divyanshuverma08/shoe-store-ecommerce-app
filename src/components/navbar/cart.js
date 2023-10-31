"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./navbar.module.css";

export default function Cart() {
  const [mounted, setMounted] = useState();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Link href="/cart" className={styles.cart}>
      {mounted && cart?.quantity}
    </Link>
  );
}
