"use client";

import React, { useState } from "react";
import styles from "../product.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddToCart({ slug, sizes }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectSize, setSelectSize] = useState(null);

  const handleAddToCart = () => {
    if (!selectSize) {
      toast.error("Please select a size");
      return;
    }
    dispatch(addProduct({ id: slug, size: selectSize, quantity: 1 }));
  };

  const handleBuyNow = () =>{
    if (!selectSize) {
      toast.error("Please select a size");
      return;
    }
    dispatch(addProduct({ id: slug, size: selectSize, quantity: 1 }));
    router.push("/cart");
  }

  return (
    <>
      <div className={styles.productSize}>
        <div className={styles.productSizeHeader}>
          <h4 className={styles.productSizeTitle}>SIZE</h4>
          <p className={styles.productSizeTitle}>SIZE CHART</p>
        </div>
        <div className={styles.sizes}>
          {sizes.map((size, i) => (
            <div
              key={i}
              onClick={() => {
                if(size.quantity >= 1){
                  setSelectSize(size.size)
                }
              }}
              className={`${styles.size} ${
                size.quantity < 1 && styles.unavailableSize
              } ${selectSize === size.size && styles.selectedSize}`}
            >
              {size.size}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.productBuy}>
        <div className={styles.addToCart} onClick={handleAddToCart}>
          ADD TO CART
        </div>
        <div className={styles.buyNow} onClick={handleBuyNow}>BUY IT NOW</div>
      </div>
    </>
  );
}
