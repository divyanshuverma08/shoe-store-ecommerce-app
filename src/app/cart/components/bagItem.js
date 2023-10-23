"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import styles from "../cart.module.css"
import { changeProductQuantity, removeProduct, getTotalAmount, checkCartValidity } from '@/redux/cartSlice'
import { useDispatch } from "react-redux";
import Link from 'next/link'

export default function BagItem({id,model,gender,category,color,size,price,quantity,availableStock}) {
  const dispatch = useDispatch();

  const [itemQuantity,setItemQuantity] = useState(quantity);

  const handleQuantity = (e) => {
    const {value} = e.target;
    dispatch(changeProductQuantity({id,size,quantity:parseInt(value)}));
    dispatch(getTotalAmount());
    dispatch(checkCartValidity());
    setItemQuantity(value);
  }

  const handleRemoveProduct = () => {
    dispatch(removeProduct({id,size}));
    dispatch(getTotalAmount());
    dispatch(checkCartValidity());
  }

  return (
    <div className={styles.bagItem} style={{opacity: availableStock < quantity ? 0.4 : 1}}>
    <div className={styles.itemImg}>
      <Image src="/product/img1.png" fill alt="product image" />
    </div>
    <div className={styles.itemCotainer}>
      <div className={styles.itemDescBox}>
        <div className={styles.itemDesc}>
          <div className={styles.itemInfo}>
            <Link href={`/products/${id}`} className={styles.itemTitle}>{model}</Link>
            <p className={styles.itemInfoText}>
              {`${gender}'s ${category}`}
            </p>
            <p className={styles.itemInfoText}>
              {color}
            </p>
          </div>
          <div className={styles.itemSizeAndQty}>
            <div className={styles.itemInfoText}>Size {size}</div>
            <div className={styles.itemQuantity}>
              <p className={styles.itemInfoText}>Quantity</p>
              <div className={styles.itemQtyNo}>
                <select value={itemQuantity} onChange={handleQuantity}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemPrice}>₹{quantity * price}</div>
      </div>
      <div className={styles.itemActions}>
        <div className={styles.itemActionIcon}>
          <Image
            src="/like_icon.svg"
            alt="add to wishlist"
            fill
          />
        </div>
        <div className={styles.itemActionIcon} onClick={handleRemoveProduct}>
          <Image
            src="/remove_icon.svg"
            alt="add to wishlist"
            fill
          />
        </div>
      </div>
    </div>
  </div>
  )
}
