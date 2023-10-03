import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import Filters from "./components/filters";
import Product from "@/components/product/product";
import SortBy from "./components/sortBy";
import Pagination from "./components/pagination";
import FilterMobile from "./components/filterMobile";

export default function Products() {
  const products = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className={styles.products}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <p>Limited time only</p>
          <h2>Get 30% off</h2>
          <p>
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
        <Image
          quality={100}
          className={styles.headerImg}
          src="/products-header1.png"
          alt="30% off"
          fill
        />
      </div>
      <div className={styles.titleBar}>
        <FilterMobile />
        <div className={styles.title}>
          <h3>Life Style Shoes</h3>
          <p>122 items</p>
        </div>
        <SortBy />
      </div>
      <div className={styles.main}>
        <div className={styles.filtersContainer}>
          <Filters />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.items}>
            {products.map((e, i) => (
              <Product key={i} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
