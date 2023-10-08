import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Input from "@/components/input/input";
import Image from "next/image";
import KicksClub from "@/components/kicksClub/kicksClub";
import SocialLogin from "@/components/socialLogin/socialLogin";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Login</h1>
          <div className={styles.headerLink}>
            <Link href="/forgot-password">
              Forgot your password?
            </Link>
            <span> Or </span>
            <Link href="/register">
              {`Don't have a account ?`}
            </Link>
          </div>
        </div>
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <div className={styles.checkBox}>
          <input id="keepLoggedIn" type="checkbox" />
          <label htmlFor="keepLoggedIn">
            Keep me logged in - applies to all log in options below.{" "}
            <span>More info</span>
          </label>
        </div>
        <button className={styles.loginButton}>
          <p>Email Login</p>
          <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
        </button>
        <SocialLogin />
        <p className={styles.terms}>
          By clicking {`'Log In'`} you agree to our website KicksClub{" "}
          <span>Terms & Conditions</span>, <span>Kicks Privacy Notice</span> and{" "}
          <span>Terms & Conditions</span>.
        </p>
      </div>
      <div className={styles.loginRight}>
        <KicksClub />
      </div>
    </div>
  );
}
