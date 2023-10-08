import React from "react";
import Link from "next/link";
import styles from "./register.module.css";
import KicksClub from "@/components/kicksClub/kicksClub";
import SocialLogin from "@/components/socialLogin/socialLogin";
import Input from "@/components/input/input";
import Image from "next/image";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerLeft}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Register</h1>
          <div className={styles.headerLink}>
            <Link href="/login">Already have an account ?</Link>
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Sign up with</p>
          <SocialLogin />
        </div>
        <p className={styles.sectionTitle}>OR</p>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Your Name</p>
          <Input type={"text"} placeholder={"First Name"} />
          <Input type={"text"} placeholder={"Last Name"} />
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Login Details</p>
          <Input type={"email"} placeholder={"Email"} />
          <div className={styles.inputContainer}>
            <Input type={"password"} placeholder={"Password"} />
            <p>
              Minimum 8 characters with at least one uppercase, one lowercase,
              one special character and a number
            </p>
          </div>
          <Input type={"password"} placeholder={"Re Enter Password"} />
        </div>
        <div className={styles.checkBox}>
          <input id="keepLoggedIn" type="checkbox" />
          <label htmlFor="keepLoggedIn">
            Agree to our website KicksClub <span>Terms & Conditions</span>,
            <span>Kicks Privacy Notice</span> and
            <span>Terms & Conditions</span>.
          </label>
        </div>
        <div className={styles.checkBox}>
          <input id="keepLoggedIn" type="checkbox" />
          <label htmlFor="keepLoggedIn">
            Keep me logged in - applies to all log in options below.
            <span>More info</span>
          </label>
        </div>
        <button className={styles.loginButton}>
          <p>Register</p>
          <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
        </button>
      </div>
      <div className={styles.registerRight}>
        <KicksClub />
      </div>
    </div>
  );
}
