"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import styles from "../products.module.css";

export default function Filters() {
  const [value, setValue] = React.useState([15500, 30000]);

  const [hide, setHide] = useState({
    refine: false,
    size: true,
    color: true,
    category: true,
    gender: true,
    price: true,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.filters}>
        <h4>Filters</h4>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Refine by</h5>
            <Image
              className={hide.refine ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, refine: !hide.refine };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.optionWrap} ${
              hide.refine ? styles.hide : styles.display
            }`}
          >
            <div className={styles.refineBySelection}>
              <p>Mens</p>
            </div>
            <div className={styles.refineBySelection}>
              <p>Casual</p>
            </div>
          </div>
        </div>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Size</h5>
            <Image
              className={hide.size ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, size: !hide.size };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.optionWrap} ${
              hide.size ? styles.hide : styles.display
            }`}
          >
            <div
              className={`${styles.box} ${styles.size} ${styles.selectedSize}`}
            >
              6
            </div>
            <div
              className={`${styles.box} ${styles.size} ${styles.unavailableSize}`}
            >
              7
            </div>
            <div
              className={`${styles.box} ${styles.size} ${styles.unavailableSize}`}
            >
              8
            </div>
            <div className={`${styles.box} ${styles.size}`}>9</div>
            <div className={`${styles.box} ${styles.size}`}>10</div>
            <div className={`${styles.box} ${styles.size}`}>11</div>
            <div className={`${styles.box} ${styles.size}`}>12</div>
          </div>
        </div>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Color</h5>
            <Image
              className={hide.color ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, color: !hide.color };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.optionWrap} ${
              hide.color ? styles.hide : styles.display
            }`}
          >
            <div className={`${styles.box} blue`}></div>
            <div className={`${styles.box} yellow`}></div>
            <div className={`${styles.box} black`}></div>
            <div className={`${styles.box} green`}></div>
            <div className={`${styles.box} jet`}></div>
            <div className={`${styles.box} orange`}></div>
            <div className={`${styles.box} gray`}></div>
            <div className={`${styles.box} metal`}></div>
            <div className={`${styles.box} brown`}></div>
            <div className={`${styles.box} wood`}></div>
          </div>
        </div>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Category</h5>
            <Image
              className={hide.category ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, category: !hide.category };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.optionList} ${
              hide.category ? styles.hide : styles.display
            }`}
          >
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="casual"
                name="casual"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="casual">Casual shoes</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="runners"
                name="runners"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="runners">Runners</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="hiking"
                name="hiking"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="hiking">Hiking</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="sneaker"
                name="sneaker"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="sneaker">Sneaker</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="basketball"
                name="basketball"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="basketball">Basketball</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="golf"
                name="golf"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="golf">Golf</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="outdoor"
                name="outdoor"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="outdoor">Outdoor</label>
            </div>
          </div>
        </div>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Gender</h5>
            <Image
              className={hide.gender ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, gender: !hide.gender };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.optionList} ${
              hide.gender ? styles.hide : styles.display
            }`}
          >
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="men"
                name="men"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="women"
                name="women"
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="women">Women</label>
            </div>
          </div>
        </div>
        <div className={styles.filterOption}>
          <div className={styles.optionHeader}>
            <h5>Price</h5>
            <Image
              className={hide.price ? styles.rotateDown : ""}
              onClick={() => {
                setHide((prevValue) => {
                  return { ...prevValue, price: !hide.price };
                });
              }}
              src="/arrow_up.svg"
              width={24}
              height={24}
              alt="drop down"
            />
          </div>
          <div
            className={`${styles.range} ${
              hide.price ? styles.hide : styles.display
            }`}
          >
            <Slider
              min={5000}
              max={50000}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
            />
            <div className={styles.rangeValue}>
              <span>${value[0]}</span>
              <span>${value[1]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filtersMobileButtons}>
        <button className={styles.mButton}>RESET</button>
        <button className={styles.mButton}>APPLY</button>
      </div>
    </>
  );
}
