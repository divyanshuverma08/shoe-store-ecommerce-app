"use client";

import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import Link from "next/link";
import ProductsMayLike from "@/components/productsMayLike/productsMayLike";
import BagItem from "./components/bagItem";
import OrderSummary from "@/components/orderSummary/orderSummary";
import { products } from "@/lib/services/products";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct, getTotalAmount, checkCartValidity } from "@/redux/cartSlice";
import toast from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [featured,setFeatured] = useState(null);

  useEffect(() => {
    if (cart) {
      getCartProducts();
    }
    getFeatured();
  }, []);

  const getCartProducts = async () => {
    let items = cart.products;

    if(cart.products.length < 1){
      return;
    }

    try {
      await Promise.all(
        items.map(async (item) => {
          const product = await products.getProductById({
            id: item.id,
            auth: false,
          });

          const size = product.data.sizes.find(
            ({ size }) => item.size === size
          );

          dispatch(
            loadProduct({
              id: item.id,
              size: item.size,
              model: product.data.model,
              category: product.data.category.name,
              gender: product.data.gender,
              color: product.data.color,
              price: product.data.price,
              availableStock: size.quantity,
            })
          );
        })
      );

      dispatch(getTotalAmount());
      dispatch(checkCartValidity());

    } catch(error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }

  };

  async function getFeatured() {
    try {
      const data = await products.getFeatured({ auth: false });
  
      if (data) {
        setFeatured(data.data);
      }
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Saving to celebrate</p>
        <p className={styles.headerContent}>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className={styles.headerLinks}>
          <Link href="/checkout">Join us</Link> or <Link href="/">Sign-in</Link>
        </p>
      </div>
      <div className={styles.cartMain}>
        <div className={styles.bag}>
          <div className={styles.bagHeader}>
            <p className={styles.bagHeaderTitle}>Your Bag</p>
            <p className={styles.bagHeaderContent}>
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>
          <div className={styles.bagContent}>
            {cart?.products.map((product, i) => (
              <BagItem
                key={`${product.id}${product.size}`}
                id={product.id}
                model={product.model}
                category={product.category}
                gender={product.gender}
                color={product.color}
                price={product.price}
                size={product.size}
                quantity={product.quantity}
                availableStock={product.availableStock}
              />
            ))}
          </div>
        </div>
        <OrderSummary cart={true} />
      </div>
      <ProductsMayLike data={featured} />
    </div>
  );
}
