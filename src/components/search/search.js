"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { environment } from "@/lib/environment";
import { useRouter } from "next/navigation";
import styles from "./search.module.css";

export default function Search() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const [data, setData] = useState(null);

  let cancelToken;

  const handleSearch = async (e) => {
    const { value } = e.target;

    if (!value) {
      setData(null);
      return;
    }

    if (cancelToken) {
      cancelToken.cancel("Operation is cancelled");
    }
    cancelToken = axios.CancelToken.source();

    try {
      const response = await axios.get(
        `${environment.SERVER_URL}/api/v1/products/search/${value}`,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": `${environment.API_KEY}`,
          },
          cancelToken: cancelToken.token,
        }
      );

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.searchTab}>
      {!open && (
        <div className={styles.searchIcon} onClick={() => setOpen(!open)}>
          <Image src="/search.svg" fill alt="search" />
        </div>
      )}
      {open && (
        <div className={styles.searchInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M7.40906 2C6.43814 2 5.48903 2.28791 4.68174 2.82733C3.87444 3.36674 3.24524 4.13343 2.87368 5.03045C2.50213 5.92746 2.40491 6.91451 2.59433 7.86677C2.78375 8.81904 3.25129 9.69375 3.93783 10.3803C4.62438 11.0668 5.49909 11.5344 6.45135 11.7238C7.40362 11.9132 8.39067 11.816 9.28768 11.4444C10.1847 11.0729 10.9514 10.4437 11.4908 9.63639C12.0302 8.8291 12.3181 7.87998 12.3181 6.90906C12.318 5.60712 11.8008 4.35853 10.8802 3.43792C9.95959 2.51731 8.711 2.00008 7.40906 2V2Z"
              stroke="#70706E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M11.0715 10.5713L14.5 13.9997"
              stroke="#70706E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
          <div className={styles.searchInputContainer}>
            <input onChange={handleSearch} type="text" placeholder="Search" />
          </div>
          <svg
            onClick={() => {
              setOpen(false);
              setData(null);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M14.5 8C14.5 4.6875 11.8125 2 8.5 2C5.1875 2 2.5 4.6875 2.5 8C2.5 11.3125 5.1875 14 8.5 14C11.8125 14 14.5 11.3125 14.5 8Z"
              stroke="#4A69E2"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M10.5 10L6.5 6M6.5 10L10.5 6"
              stroke="#4A69E2"
              strokeWidth="1.5"
              strokeLinecap="round"
              stroke-Linejoin="round"
            />
          </svg>
          {data && (
            <div className={styles.searchResult}>
              <p className={styles.title}>Products</p>
              {data &&
                data?.map((item) => (
                  <div
                    key={item._id}
                    className={styles.tab}
                    onClick={() => {
                      setOpen(false);
                      setData(null);
                      router.push(`/products/${item._id}`);
                    }}
                  >
                    {item.model.substring(0, 20)}
                    <div className={styles.arrow}>
                      <Image
                        src="/arrow_down.svg"
                        width={25}
                        height={25}
                        alt="men"
                      />
                    </div>
                  </div>
                ))}
              <p className={styles.bottom}>See all products</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
