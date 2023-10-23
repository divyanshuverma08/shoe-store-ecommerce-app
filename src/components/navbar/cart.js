"use client"

import React from 'react'
import Link from 'next/link'
import { useSelector } from "react-redux";
import styles from "./navbar.module.css"

export default function Cart() {
    const cart = useSelector((state) => state.cart);
  return (
    <Link href="/cart" className={styles.cart}>{cart?.quantity}</Link>
  )
}
