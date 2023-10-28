"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import axios from "axios";
import { logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { environment } from "@/lib/environment";
import { headers } from "../../../next.config";

export default function Sidebar() {
  const user = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [data, setData] = useState(null);

  const [value, setValue] = useState("");

  const disableBodyScroll = () => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "unset";
  };

  let cancelToken;

  const handleSearch = async (e) => {
    const { value } = e.target;

    setValue(value);

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
    <div className={styles.sidebar}>
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(true);
          disableBodyScroll();
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.sidebarContainer} ${open && styles.active}`}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image src="/logo.svg" fill alt="logo" />
          </div>
          <div
            className={styles.closeButton}
            onClick={() => {
              setOpen(false);
              enableBodyScroll();
            }}
          >
            <Image src="/close.svg" alt="close" width={35} height={35} />
          </div>
        </div>
        <div className={styles.sidbarContent}>
          <div
            className={styles.tab}
            onClick={() => {
              setOpen(false);
              enableBodyScroll();
              router.push("/#featured");
            }}
          >
            NEW DROPS 🔥
            <div className={styles.arrow}>
              <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
            </div>
          </div>
          <div
            className={styles.tab}
            onClick={() => {
              setOpen(false);
              enableBodyScroll();
              router.push("/products?gender=Men");
            }}
          >
            MEN
            <div className={styles.arrow}>
              <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
            </div>
          </div>
          <div
            className={styles.tab}
            onClick={() => {
              setOpen(false);
              enableBodyScroll();
              router.push("/products?gender=Women");
            }}
          >
            WOMEN
            <div className={styles.arrow}>
              <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
            </div>
          </div>
          {!user ? (
            <div
              onClick={() => {
                setOpen(false);
                enableBodyScroll();
                router.push("/login");
              }}
              className={styles.tab}
            >
              Login
              <div className={styles.arrow}>
                <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(logout());
                localStorage.setItem("user", null);
                setOpen(false);
                enableBodyScroll();
                router.push("/login");
              }}
              className={styles.tab}
            >
              Logout
              <div className={styles.arrow}>
                <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
              </div>
            </div>
          )}
          <div
            onClick={() => {
              setOpenSearch(true);
              setOpen(false);
              setValue("");
            }}
            className={styles.tab}
          >
            Search
            <div className={styles.arrow}>
              <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.searchSideBarContainer} ${
          openSearch && styles.active
        }`}
      >
        <div className={styles.topSearch}>
          <div
            className={styles.searchClose}
            onClick={() => {
              setOpenSearch(false);
              enableBodyScroll();
              setData(null);
              setValue("");
            }}
          >
            <Image src="/arrow_down.svg" width={25} height={25} alt="men" />
          </div>
          <div className={styles.input}>
            <input
              value={value}
              onChange={handleSearch}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.sidbarContent}>
          {data &&
            data?.map((item) => (
              <div
                key={item._id}
                className={styles.tab}
                onClick={() => {
                  setOpenSearch(false);
                  enableBodyScroll();
                  setData(null);
                  setValue("");
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
        </div>
      </div>
    </div>
  );
}
