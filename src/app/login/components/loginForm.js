"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/input/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "../login.module.css";
import { auth } from "@/lib/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/authSlice";

export default function LoginForm() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = async () => {
    const { email, password } = loginData;

    const toastId = toast.loading("Loading...", { position: "top-left" });

    try {
      const data = await auth.login({
        data: {
          email,
          password,
        },
        auth: false,
      });
      toast.dismiss(toastId);

      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(login(data.user));

      router.push("/");
    } catch (error) {
      toast.dismiss(toastId);
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  useEffect(()=>{
    if (user) {
      router.push("/");
    }
  },[])

  return (
    <>
      <Input
        name="email"
        value={loginData.email}
        onChange={handleChange}
        type={"email"}
        placeholder={"Email"}
      />
      <Input
        name="password"
        value={loginData.password}
        onChange={handleChange}
        type={"password"}
        placeholder={"Password"}
      />
      {/* <div className={styles.checkBox}>
        <input
          id="keepLoggedIn"
          type="checkbox"
          checked={keepLoggedIn}
          onChange={(e) => setKeepLoggedIn(e.target.checked)}
        />
        <label htmlFor="keepLoggedIn">
          Keep me logged in - applies to all log in options below.{" "}
          <span>More info</span>
        </label>
      </div> */}
      <button onClick={handleSubmit} className={styles.loginButton}>
        <p>Email Login</p>
        <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
      </button>
    </>
  );
}
