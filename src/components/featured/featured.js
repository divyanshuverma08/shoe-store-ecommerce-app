import React from "react";
import styles from "./featured.module.css";
import Product from "../product/product";
import Link from "next/link";
import { products } from "@/lib/services/products";

async function getFeatured() {
  try {
    const data = await products.getFeatured({auth:false});

    if (data) {
      return data.data;
    }
  } catch (error) {
    if(error.response?.data){
      console.log(error.response.data);
    }
  }
}

export default async function Featured() {
  const data = await getFeatured();

  return (
    <div id="featured" className={styles.featured}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Don’t miss out</h2>
          <h2>new drops</h2>
        </div>
        <div className={styles.headerRight}>
          <Link href="/products" className={styles.button}>SHOP NEW DROPS</Link>
        </div>
      </div>
      <div className={styles.products}>
        {data?.map((product) => (
          <Product key={product._id} slug={product._id} model={product.model} category={product.category.name} price={product.price} newRelease={product.newRelease} image={product.images[0].imageUrl} />
        ))}
      </div>
    </div>
  );
}
