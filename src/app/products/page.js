import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import Filters from "./components/filters";
import Product from "@/components/product/product";
import SortBy from "./components/sortBy";
import Pagination from "./components/pagination";
import FilterMobile from "./components/filterMobile";
import { products } from "@/lib/services/products";

export const dynamic = 'force-dynamic'

async function getProducts(params){

  const query = new URLSearchParams({...params});

  try {
    const response = await products.getProductsWithFiltersAndPagination({query,auth: false});

    if (response) {
      return response;
    }
  } catch (error) {
    if(error.response?.data){
      console.log(error.response.data);
    }
  }
}

export default async function Products({searchParams}) {
  const data = await getProducts(searchParams);
  const metadata = data?.metadata;

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
      <div id="titleBar" className={styles.titleBar}>
        <FilterMobile params={searchParams} />
        <div className={styles.title}>
          <h3>Life Style Shoes</h3>
          <p>122 items</p>
        </div>
        <SortBy params={searchParams} />
      </div>
      <div className={styles.main}>
        <div className={styles.filtersContainer}>
          <Filters params={searchParams} />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.items}>
            {data?.data.map((product, i) => (
              <Product grid={true} key={product._id} slug={product._id} model={product.model} category={product.category.name} price={product.price} newRelease={product.newRelease} image={product.images[0].imageUrl} />
            ))}
          </div>
          <Pagination params={searchParams} hasNext={metadata?.hasNextPage} hasPrev={metadata?.hasPreviousPage} totalPages={metadata?.totalPages} />
        </div>
      </div>
    </div>
  );
}
