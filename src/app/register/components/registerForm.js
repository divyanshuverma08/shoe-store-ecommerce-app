"use client";

import styles from "../register.module.css";
import Image from "next/image";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { auth } from "@/lib/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/authSlice";

export default function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.currentUser);

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    passwordReEnter: "",
    firstName: "",
    lastName: "",
  });

  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = async () => {
    const { email, password, passwordReEnter, firstName, lastName } =
      registerData;

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!password || !passwordReEnter) {
      toast.error("Password is required");
      return;
    }

    if (!firstName || !lastName) {
      toast.error("Name is required");
      return;
    }

    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return;
    }

    const passwordRegex = new RegExp(
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$"
    );

    if (!passwordRegex.test(password)) {
      toast.error("Enter a valid password");
      return;
    }

    if (password.localeCompare(passwordReEnter) !== 0) {
      toast.error("Passwords fields should be same");
      return;
    }

    if (!termsCheckbox) {
      toast("Please agree to terms&conditions", {
        icon: "⛔",
      });
      return;
    }
    const toastId = toast.loading("Loading...", { position: "top-left" });

    try {
      const data = await auth.register({
        data: {
          firstName,
          lastName,
          email,
          password,
        },
        auth: false,
      });
      toast.dismiss(toastId);

      if(keepLoggedIn){
        localStorage.setItem("user",JSON.stringify(data.user))
      }else{
        dispatch(login(data.user))
      }

      toast.success("Account has been created", { duration: 2000 });
      router.push("/");
    } catch (error) {
      toast.dismiss(toastId);
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  if(user){
    router.push("/");
  }

  return (
    <>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Your Name</p>
        <Input
          name="firstName"
          value={registerData.firstName}
          onChange={handleChange}
          type={"text"}
          placeholder={"First Name"}
        />
        <Input
          name="lastName"
          value={registerData.lastName}
          onChange={handleChange}
          type={"text"}
          placeholder={"Last Name"}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Login Details</p>
        <Input
          name="email"
          value={registerData.email}
          onChange={handleChange}
          type={"email"}
          placeholder={"Email"}
        />
        <div className={styles.inputContainer}>
          <Input
            name="password"
            value={registerData.password}
            onChange={handleChange}
            type={"password"}
            placeholder={"Password"}
          />
          <p>
            Minimum 8 characters with at least one uppercase, one lowercase, one
            special character and a number
          </p>
        </div>
        <Input
          name="passwordReEnter"
          value={registerData.passwordReEnter}
          onChange={handleChange}
          type={"password"}
          placeholder={"Re Enter Password"}
        />
      </div>
      <div className={styles.checkBox}>
        <input
          id="keepLoggedIn"
          type="checkbox"
          checked={termsCheckbox}
          onChange={(e) => setTermsCheckbox(e.target.checked)}
        />
        <label htmlFor="keepLoggedIn">
          Agree to our website KicksClub <span>Terms & Conditions</span>,
          <span>Kicks Privacy Notice</span> and
          <span>Terms & Conditions</span>.
        </label>
      </div>
      <div className={styles.checkBox}>
        <input
          id="keepLoggedIn"
          type="checkbox"
          checked={keepLoggedIn}
          onChange={(e) => setKeepLoggedIn(e.target.checked)}
        />
        <label htmlFor="keepLoggedIn">
          Keep me logged in - applies to all log in options below.
          <span>More info</span>
        </label>
      </div>
      <button className={styles.loginButton} onClick={handleSubmit}>
        <p>Register</p>
        <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
      </button>
    </>
  );
}
