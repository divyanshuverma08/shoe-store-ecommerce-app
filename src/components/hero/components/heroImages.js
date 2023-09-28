"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../hero.module.css";

export default function HeroImages() {
  const images = [
    "/hero-image.jpeg",
    "/hero-box-img1.jpeg",
    "/hero-box-img2.jpeg",
  ];
  const [imagePos, setImagePos] = useState([0, 1, 2]);

  const [image, setImage] = useState({
    image1: <Image className={styles.image} src={images[0]} fill alt="show" />,
    image2: (
      <Image className={styles.boxImage} src={images[1]} fill alt="show" />
    ),
    image3: (
      <Image className={styles.boxImage} src={images[2]} fill alt="show" />
    ),
  });

  function changeImage(i, j) {
    var arr = imagePos;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    setImagePos(arr);

    setImage({
      image1: (
        <Image className={styles.image} src={images[imagePos[0]]} fill alt="show" />
      ),
      image2: (
        <Image className={styles.boxImage} src={images[imagePos[1]]} fill alt="show" />
      ),
      image3: (
        <Image className={styles.boxImage} src={images[imagePos[2]]} fill alt="show" />
      ),
    });

  }

  return (
    <>
      <div className={styles.imageContainer}>{image["image1"]}</div>
      <div className={styles.boxImages}>
        <div
          className={styles.boxImageContaner}
          onClick={() => changeImage(0, 1)}
        >
          {image["image2"]}
        </div>
        <div
          className={styles.boxImageContaner}
          onClick={() => changeImage(0, 2)}
        >
          {image["image3"]}
        </div>
      </div>
    </>
  );
}
