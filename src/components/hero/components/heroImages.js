"use client";

import React, { useState } from "react";
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
    image1: images[imagePos[0]],
    image2: images[imagePos[1]],
    image3: images[imagePos[2]],
  });

  function changeImage(i, j) {
    var arr = imagePos;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    setImagePos(arr);

    setImage({
      image1: images[imagePos[0]],
      image2: images[imagePos[1]],
      image3: images[imagePos[2]],
    });
  }

  return (
    <>
      <div className={styles.imageContainer}>
        <Image priority={true}  className={styles.image} src={image["image1"]} fill alt="show" />
      </div>
      <div className={styles.boxImages}>
        <div
          className={styles.boxImageContaner}
          onClick={() => changeImage(0, 1)}
        >
          <Image priority={true} className={styles.boxImage} src={image["image2"]} fill alt="show" />
        </div>
        <div
          className={styles.boxImageContaner}
          onClick={() => changeImage(0, 2)}
        >
          <Image priority={true} className={styles.boxImage} src={image["image3"]} fill alt="show" />
        </div>
      </div>
    </>
  );
}
