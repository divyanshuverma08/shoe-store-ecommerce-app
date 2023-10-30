import React from "react";
import styles from "./product.module.css";
import ProductImages from "./components/productImages";
import ProductsMayLike from "@/components/productsMayLike/productsMayLike";
import { products } from "@/lib/services/products";
import AddToCart from "./components/addToCart";

async function getProduct(slug) {
  try {
    const response = await products.getProductById({ id: slug, auth: false });

    if (response) {
      return response.data;
    }
  } catch (error) {
    if (error.response?.data) {
      console.log(error.response.data);
    }
  }
}

async function getFeatured() {
  try {
    const data = await products.getFeatured({ auth: false });

    if (data) {
      return data.data;
    }
  } catch (error) {
    if (error.response?.data) {
      console.log(error.response.data);
    }
  }
}

export default async function Product({ params }) {
  const { slug } = params;

  const productData = getProduct(slug);
  const featuredData = getFeatured();

  const [data, featured] = await Promise.all([productData, featuredData]);

  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <ProductImages images={data.images} />
        <div className={styles.prouctDetails}>
          <div className={styles.productInfo}>
            {data?.newRelease && (
              <div className={styles.newRelease}>New Release</div>
            )}
            <div className={styles.name}>
              <h1>{data?.model}</h1>
              <h2>{data?.category.name}</h2>
            </div>
            <h3 className={styles.price}>₹{data?.price}</h3>
          </div>
          <div className={styles.productColor}>
            <h4 className={styles.productColorTitle}>COLOR</h4>
            <div className={`${styles.productColorIcon} ${data?.color}`}></div>
          </div>
          <AddToCart sizes={data?.sizes} slug={slug} />
          <div className={styles.productAbout}>
            <h4 className={styles.productAboutTitle}>ABOUT THE PRODUCT</h4>
            <div className={styles.productAboutContent}>
              <p>{data?.color}</p>
              <p>
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul>
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductsMayLike data={featured} />
    </div>
  );
}
