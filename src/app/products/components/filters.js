"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import styles from "../products.module.css";
import { useRouter } from "next/navigation";

const sizes = [6, 7, 8, 9, 10, 11, 12];
const colors = [
  "blue",
  "yellow",
  "black",
  "green",
  "jet",
  "orange",
  "gray",
  "metal",
  "brown",
  "wood",
];

const categories = [
  "casual",
  "runners",
  "hiking",
  "sneaker",
  "basketball",
  "golf",
  "outdoor",
];

const priceMin = 1000;
const priceMax = 100000;

export default function Filters({ params, modal, onClose }) {
  const router = useRouter();

  const [init, setInit] = useState(false);
  const [value, setValue] = React.useState([parseInt(params["price[gte]"]) || priceMin, parseInt(params["price[lte]"]) || priceMax]);

  const [hide, setHide] = useState({
    refine: false,
    size: true,
    color: true,
    category: true,
    gender: true,
    price: true,
  });

  const [size, setSize] = useState(params.size || "");

  const [color, setColor] = useState(params.color || "");

  const [category, setCategory] = useState(params.category || "");

  const [gender, setGender] = useState(params.gender || "");

  const [price, setPrice] = useState({
    gte: parseInt(params["price[gte]"]) || priceMin,
    lte: parseInt(params["price[lte]"]) || priceMax,
  });

  const [mobileQuery, setMobileQuery] = useState("");

  const handleSize = (newSize) => {
    let oldSize = [];

    if (size.length > 0) {
      oldSize = size.split(",").map(Number);
    }

    if (oldSize.includes(newSize)) {
      let index = oldSize.indexOf(newSize);
      oldSize.splice(index, 1);
    } else {
      oldSize.push(newSize);
    }

    setSize(oldSize.toString());
  };

  const handleColor = (newColor) => {
    let oldColor = [];

    if (color.length > 0) {
      oldColor = color.split(",");
    }

    if (oldColor.includes(newColor)) {
      let index = oldColor.indexOf(newColor);
      oldColor.splice(index, 1);
    } else {
      oldColor.push(newColor);
    }

    setColor(oldColor.toString());
  };

  const handleCategory = (newCategory) => {
    let oldCategory = [];

    if (category.length > 0) {
      oldCategory = category.split(",");
    }

    if (oldCategory.includes(newCategory)) {
      let index = oldCategory.indexOf(newCategory);
      oldCategory.splice(index, 1);
    } else {
      oldCategory.push(newCategory);
    }

    setCategory(oldCategory.toString());
  };

  const handleGender = (newGender) => {
    let oldGender = [];

    if (gender.length > 0) {
      oldGender = gender.split(",");
    }

    if (oldGender.includes(newGender)) {
      let index = oldGender.indexOf(newGender);
      oldGender.splice(index, 1);
    } else {
      oldGender.push(newGender);
    }

    setGender(oldGender.toString());
  };

  const handlePrice = (value) => {
    const [gte, lte] = value;
    setPrice({ gte: gte, lte: lte });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMobileQuery = () => {
    router.push(`/products?` + mobileQuery, { scroll: false });
    onClose();
  };

  const resetFilters = () => {
    setSize("");
    setColor("");
    setCategory("");
    setGender("");
    setPrice({
      gte: priceMin,
      lte: priceMax,
    });
  };

  useEffect(()=>{
    setCategory(params.category);
  },[params.category])

  useEffect(() => {
    if (init) {
      let queryObject = {};
      const { sort } = params;

      if (size) {
        queryObject.size = size;
      }

      if (color) {
        queryObject.color = color;
      }

      if (category) {
        queryObject.category = category;
      }

      if (gender) {
        queryObject.gender = gender;
      }

      if (price.gte && price.lte) {
        queryObject["price[gte]"] = price.gte;
        queryObject["price[lte]"] = price.lte;
      }

      if (sort) {
        queryObject.sort = sort;
      }

      const urlQuery = new URLSearchParams(queryObject);

      if (!modal) {
        router.push(`/products?` + urlQuery, { scroll: false });
      } else {
        setMobileQuery(urlQuery);
      }
    }
    setInit(true);
  }, [size, color, category, gender, price]);

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
            {[
              ...size.split(","),
              ...color.split(","),
              ...category.split(","),
              ...gender.split(","),
            ].map(
              (ele, i) =>
                ele !== "" && (
                  <div key={i} className={styles.refineBySelection}>
                    <p>{ele}</p>
                  </div>
                )
            )}
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
            {sizes.map((ele, i) => (
              <div
                key={i}
                onClick={() => handleSize(ele)}
                className={`${styles.box} ${styles.size} ${
                  size.includes(ele) && styles.selectedSize
                }`}
              >
                {ele}
              </div>
            ))}
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
            {colors.map((ele, i) => (
              <div
                key={i}
                className={`${styles.box} ${ele}`}
                onClick={() => handleColor(ele)}
              >
                {color.includes(ele) && (
                  <div className={styles.boxTick}>
                    <Image src="/tick.svg" width={30} height={30} alt="tick" />
                  </div>
                )}
              </div>
            ))}
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
            {categories.map((ele, i) => (
              <div key={i} className={styles.checkBox}>
                <input
                  type="checkbox"
                  id={ele}
                  value={ele}
                  name={ele}
                  checked={category.includes(ele)}
                  onChange={() => handleCategory(ele)}
                />
                <label onClick={() => handleCategory(ele)} >{ele}</label>
              </div>
            ))}
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
                checked={gender.includes("Men")}
                onChange={() => handleGender("Men")}
              />
              <label onClick={() => handleGender("Men")} >Men</label>
            </div>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="women"
                name="women"
                checked={gender.includes("Women")}
                onChange={() => handleGender("Women")}
              />
              <label onClick={() => handleGender("Women")}>Women</label>
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
              onChangeCommitted={(e, value) => handlePrice(value)}
              min={priceMin}
              max={priceMax}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
            />
            <div className={styles.rangeValue}>
              <span>₹{value[0]}</span>
              <span>₹{value[1]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filtersMobileButtons}>
        <button className={styles.mButton} onClick={()=>resetFilters()}>RESET</button>
        <button className={styles.mButton} onClick={() => handleMobileQuery()}>
          APPLY
        </button>
      </div>
    </>
  );
}
