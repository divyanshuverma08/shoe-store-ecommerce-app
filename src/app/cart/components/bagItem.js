import React from 'react'
import Image from 'next/image'
import styles from "../cart.module.css"

export default function BagItem() {
  return (
    <div className={styles.bagItem}>
    <div className={styles.itemImg}>
      <Image src="/product/img1.png" fill alt="product image" />
    </div>
    <div className={styles.itemCotainer}>
      <div className={styles.itemDescBox}>
        <div className={styles.itemDesc}>
          <div className={styles.itemInfo}>
            <p className={styles.itemTitle}>DROPSET TRAINER SHOES</p>
            <p className={styles.itemInfoText}>
              Men’s Road Running Shoes
            </p>
            <p className={styles.itemInfoText}>
              Enamel Blue/ University White
            </p>
          </div>
          <div className={styles.itemSizeAndQty}>
            <div className={styles.itemInfoText}>Size 10</div>
            <div className={styles.itemQuantity}>
              <p className={styles.itemInfoText}>Quantity</p>
              <div className={styles.itemQtyNo}>
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemPrice}>$130.00</div>
      </div>
      <div className={styles.itemActions}>
        <div className={styles.itemActionIcon}>
          <Image
            src="/like_icon.svg"
            alt="add to wishlist"
            fill
          />
        </div>
        <div className={styles.itemActionIcon}>
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
